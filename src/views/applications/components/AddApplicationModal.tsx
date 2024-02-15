import { ButtonPrimary, ButtonSecondary, Input } from '@/components'
import { Modal } from '@/components/organisms/modal/Modal'
import dayjs from 'dayjs'
import { createApplication, scrapApplication } from '@/services/applications/application'
import { addApplication } from '@/contexts/applications/applications.actions'
import { FormikErrors, useFormik } from 'formik'
import { useApplicationsContext } from '@/contexts/applications/applications.provider'
import { useRef } from 'react'
import { DatePickerInput } from '@/components/organisms/datePickerInput/DatePickerInput'
import { alert } from '@/components/molecules/toast/toast.helper'
import { API_DATE_FORMAT } from '@/shared/constants'
import { useUserContext } from '@/contexts/user/user.provider'
import { increasedApplicationsNumber } from '@/contexts/user/user.action'
import { isUrl } from '@/utils/check/string'

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
  const timerRef = useRef<NodeJS.Timeout>()
  const { dispatch: dispatchApplications } = useApplicationsContext()
  const { dispatch: dispatchUser } = useUserContext()
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
    formik.setFieldValue('applicationDate', date)
  }

  const handleOnAdd = (application: FormValues) => {
    if (!application.jobOfferUrl) {
      delete application.jobOfferUrl
    }

    const formattedDate = dayjs(application.applicationDate).format(API_DATE_FORMAT)
    createApplication({ ...application, applicationDate: formattedDate })
      .then((newApplication) => {
        dispatchApplications(addApplication({ application: newApplication }))
        dispatchUser(increasedApplicationsNumber(1))
        onClose()
        alert({ type: 'success', message: 'Candidature créée !' })
      })
      .catch(() => {
        alert({ type: 'error', message: 'Une erreur est survenue' })
      })
  }

  const handleOnJobUrlChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue('jobOfferUrl', e.target.value)

    if (!isUrl(e.target.value)) {
      return
    }

    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    timerRef.current = setTimeout(() => {
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
    }, 500)
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
            onChange={handleOnJobUrlChange}
            name="jobOfferUrl"
          />
          <hr className="h-[1px] border-gray-600 w-full mt-8" />
          <div className="flex flex-col gap-4 laptop:flex-row items-start justify-between mt-8">
            <Input
              className="w-full"
              type="string"
              iconName="briefcase"
              label="Poste *"
              errorMessage={formik.errors.job}
              value={formik.values.job}
              onChange={formik.handleChange}
              name="job"
            />
            <Input
              className="w-full"
              type="string"
              iconName="company"
              label="Entreprise *"
              errorMessage={formik.errors.company}
              value={formik.values.company}
              onChange={formik.handleChange}
              name="company"
            />
          </div>
          <DatePickerInput
            value={formik.values.applicationDate}
            onChange={handleOnChangeDate}
            className="mt-3"
            label="Date de candidature"
          />
        </div>
        <footer className="flex items-center justify-center mt-6 gap-4">
          <ButtonSecondary className=" w-full laptop:w-fit" onClick={onClose}>
            Annuler
          </ButtonSecondary>
          <ButtonPrimary className=" w-full laptop:w-fit" type="submit">
            Confirmer
          </ButtonPrimary>
        </footer>
      </form>
    </Modal>
  )
}
