import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8000/api/'

export const api = axios.create({
  baseURL: baseUrl
})

export const fetcher = (url) => axios.get(baseUrl + url).then((res) => res.data)
