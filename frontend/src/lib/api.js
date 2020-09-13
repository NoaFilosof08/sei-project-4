import axios from 'axios'

const baseUrl = '/api/'

const withHeaders = () => {
  return {
    headers: { Authorization: `Bearer ${getToken()}` }
  }
}

export const getAllProfiles = () => {
  return axios.get(`${baseUrl}/auth/artists/`)
}

// export const getSingleProfile = () => {
//   return axios.get(`${baseUrl}/auth/profile/`)
// }

export const getArtistProfile = (pk) => {
  return axios.get(`${baseUrl}auth/artists/${pk}`)
}

export const favoriteToggle = (id) => {
  return axios.post(`${baseUrl}auth/profile}`, {}, withHeaders())
}
