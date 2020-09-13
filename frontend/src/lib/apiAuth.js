import axios from 'axios'

const baseUrl = '/api/'

export const registerUser = (data) => {
  return axios.post(`${baseUrl}auth/register/`, data)
}

export const loginUser = (data) => {
  return axios.post(`${baseUrl}auth/login/`, data)
}
