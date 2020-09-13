import axios from 'axios'

const baseUrl = '/api/'

export const getAllProfiles = () => {
  return axios.get(`${baseUrl}/auth/artists/`)
}
