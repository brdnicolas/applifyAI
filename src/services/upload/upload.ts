import { api } from '../api'
import { AxiosRequestConfig } from 'axios'

const config: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
}

type UploadCvPropsTypes = {
  applicationId: number
  cv: FormDataEntryValue | null
}

export const uploadCv = async ({ applicationId, cv }: UploadCvPropsTypes) => {
  return api.patch('/upload/cv', { applicationId, cv }, config)
}

type UploadCoverLetterPropsTypes = {
  applicationId: number
  coverLetter: FormDataEntryValue | null
}
export const uploadCoverLetter = async ({ applicationId, coverLetter }: UploadCoverLetterPropsTypes) => {
  return api.patch('/upload/coverLetter', { coverLetter, applicationId }, config)
}
