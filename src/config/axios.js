import axios from 'axios'

const DEFAULT_URL = 'http://192.170.2.212/webapiproveedor/api'
// const DEFAULT_URL = 'http://localhost:62194/api'

axios.defaults.baseURL = DEFAULT_URL

axios.defaults.headers.common = {
  'Access-Control-Allow-Origin': DEFAULT_URL,
}

const requestGeneric = {
  get: (url, body) => axios.get(url, body),
  post: (url, body) => axios.post(url, body),
  put: (url, body) => axios.put(url, body),
}

export default requestGeneric
