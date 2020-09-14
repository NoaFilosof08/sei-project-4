import axios from 'axios'
import { getToken } from './auth'

const baseUrl = '/api/'

const withHeaders = () => {
  return {
    headers: { Authorization: `Bearer ${getToken()}` }
  }
}

// Auth Requests
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

export const registerUser = (data) => {
  return axios.post(`${baseUrl}auth/register/`, data)
}

export const loginUser = (data) => {
  return axios.post(`${baseUrl}auth/login/`, data)
}

// Art Request
export const createArt = data => {
  return axios.post(`${baseUrl}arts/`, data, withHeaders())
}

export const editArt = (pk, data) => {
  return axios.put(`${baseUrl}arts/${pk}/`, data, withHeaders())
}
export const getSingleArt = (pk) => {
  return axios.get(`${baseUrl}arts/${pk}/`)
}

export const deleteArt = (pk) => {
  return axios.delete(`${baseUrl}arts/${pk}`, withHeaders())
}

// Enquiry Requests
export const createEnquiry = (data) => {
  return axios.post(`${baseUrl}enquiries/`, data, withHeaders())
}
