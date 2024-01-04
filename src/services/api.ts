import { API_BASE_URL } from './../../env'
import axios from 'axios'

export const api = axios.create({ baseURL: API_BASE_URL })

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
