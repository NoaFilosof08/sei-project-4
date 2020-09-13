import axios from 'axios'
import { getToken } from './auth'

const baseUrl = '/api/'

const withHeaders = () => {
  return {
    headers: { Authorization: `Bearer ${getToken()}` }
  }
}

export const getAllProfiles = () => {
  return axios.get(`${baseUrl}/auth/artists/`)
}

export const getSingleProfile = () => {
  return axios.get(`${baseUrl}/auth/profile/`, withHeaders())
}

export const getSingleUnpopulatedProfile = () => {
  return axios.get(`${baseUrl}/auth/profile/unpopulated/`, withHeaders())
}

export const getArtistProfile = (pk) => {
  return axios.get(`${baseUrl}auth/artists/${pk}`)
}

export const editProfile = data => {
  return axios.put(`${baseUrl}auth/profile/`, data, withHeaders())
}

export const getSingleArt = (pk) => {
  return axios.get(`${baseUrl}arts/${pk}/`)
}

export const deleteArt = (pk) => {
  return axios.delete(`${baseUrl}arts/${pk}`, withHeaders())
}

