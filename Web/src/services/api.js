import axios from 'axios'

// eslint-disable-next-line no-undef
const baseUrl = process.env.REACT_APP_BASE_URL

export const api = axios.create({
  baseURL: baseUrl
})

export const fetcher = (url) => axios.get(baseUrl + url).then((res) => res.data)
