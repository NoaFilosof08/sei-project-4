import axios from 'axios'

const baseUrl = '/api/'

export const getAllProfiles = () => {
  return axios.get(`${baseUrl}/auth/artists/`)
}

// export const getSingleProfile = () => {
//   return axios.get(`${baseUrl}/auth/profile/`)
// }

export const getArtistProfile = (pk) => {
  return axios.get(`${baseUrl}auth/artists/${pk}`)
}
