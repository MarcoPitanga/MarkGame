import axios from 'axios'

const baseUrl = 'https://markgame.herokuapp.com/api/'

export const api = axios.create({
  baseURL: baseUrl
})

export const fetcher = (url) => axios.get(baseUrl + url).then((res) => res.data)
