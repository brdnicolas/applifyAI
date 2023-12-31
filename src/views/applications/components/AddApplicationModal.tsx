import { ButtonPrimary, ButtonSecondary, Input } from '@/components'
import { Modal } from '@/components/organisms/modal/Modal'
import dayjs from 'dayjs'
import { createApplication, scrapApplication } from '@/services/applications/application'
import { addApplication } from '@/contexts/applications/applications.actions'
import { FormikErrors, useFormik } from 'formik'
import { useApplicationsContext } from '@/contexts/applications/applications.provider'
import { useRef, useState } from 'react'
import { DatePickerInput } from '@/components/organisms/datePickerInput/DatePickerInput'
import { alert } from '@/components/molecules/toast/toast.helper'
import { API_DATE_FORMAT } from '@/shared/constants'
import { useUserContext } from '@/contexts/user/user.provider'
import { updateApplicationsNumber } from '@/contexts/user/user.action'

type FormValues = {
  jobOfferUrl?: string
  job: string
  company: string
  applicationDate: Date
}

const validate = (values: FormValues) => {
  const errors: FormikErrors<FormValues> = {}

  if (!values.job) {
    errors.job = 'Un poste est requis'
  }

  if (!values.company) {
    errors.company = 'Une entreprise est requise'
  }

  if (!values.applicationDate) {
    errors.applicationDate = 'Une date est requise'
  }

  return errors
}

type AddApplicationModalProps = {
  show: boolean
  onClose: () => void
}

export const AddApplicationModal = ({ show, onClose }: AddApplicationModalProps) => {
  const [showDatePicker, setShowDatePicker] = useState(false)
  const timerRef = useRef<NodeJS.Timeout>()
  const { dispatch: dispatchApplications } = useApplicationsContext()
  const { applicationsNumber, dispatch: dispatchUser } = useUserContext()
  const formik = useFormik({
    initialValues: {
      jobOfferUrl: '',
      job: '',
      company: '',
      applicationDate: new Date(),
      companyImageUrl: ''
    },
    validate,
    validateOnChange: false,
    onSubmit: (values, { resetForm }) => {
      handleOnAdd(values)
      resetForm()
    }
  })

  const handleOnChangeDate = (date: Date) => {
    setShowDatePicker(!showDatePicker)
    formik.setFieldValue('applicationDate', date)
  }

  const handleOnAdd = (application: FormValues) => {
    if (!application.jobOfferUrl) {
      delete application.jobOfferUrl
    }

    const formattedDate = dayjs(application.applicationDate).format(API_DATE_FORMAT)
    createApplication({ ...application, applicationDate: formattedDate })
    dispatchApplications(addApplication({ application: { ...application, applicationDate: formattedDate } }))
    dispatchUser(updateApplicationsNumber({ applicationsNumber: applicationsNumber + 1 }))
    onClose()
    alert({ type: 'success', message: 'Candidature créée !' })
  }

  const handleOnJobUrlChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue('jobOfferUrl', e.target.value)

    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    timerRef.current = setTimeout(() => {
      if (!e.target.value) {
        return
      }
      scrapApplication(e.target.value).then((data) => {
        if (data.company) {
          formik.setFieldValue('company', data.company)
        }
        if (data.job) {
          formik.setFieldValue('job', data.job)
        }
        if (data.companyImageUrl) {
          formik.setFieldValue('companyImageUrl', data.companyImageUrl)
        }
      })
    }, 1500)
  }

  return (
    <Modal title="Ajouter une candidature" show={show} onClose={onClose}>
      <form onSubmit={formik.handleSubmit}>
        <div className="mt-6">
          <Input
            type="string"
            label="Lien de l'offre"
            iconName="link"
            errorMessage={formik.errors.jobOfferUrl}
            value={formik.values.jobOfferUrl}
            handleOnChange={handleOnJobUrlChange}
            name="jobOfferUrl"
          />
          <hr className="h-[1px] border-gray-600 w-full mt-8" />
          <div className="flex items-start justify-between mt-8">
            <Input
              className="w-full"
              type="string"
              iconName="briefcase"
              label="Poste *"
              errorMessage={formik.errors.job}
              value={formik.values.job}
              handleOnChange={formik.handleChange}
              name="job"
            />
            <Input
              className="w-full ml-4"
              type="string"
              iconName="briefcase"
              label="Entreprise *"
              errorMessage={formik.errors.company}
              value={formik.values.company}
              handleOnChange={formik.handleChange}
              name="company"
            />
          </div>
          <DatePickerInput
            onClick={() => setShowDatePicker(!showDatePicker)}
            value={formik.values.applicationDate}
            show={showDatePicker}
            onChange={handleOnChangeDate}
            className="mt-3"
            label="Date de candidature"
          />
        </div>
        <footer className="flex items-center justify-center mt-6">
          <ButtonSecondary onClick={onClose}>Annuler</ButtonSecondary>
          <ButtonPrimary type="submit" className="ml-4">
            Confirmer
          </ButtonPrimary>
        </footer>
      </form>
    </Modal>
  )
}
