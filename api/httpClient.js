import Axios from 'axios'

import apiConfig from './restConfig'

const request = Axios.create({
  baseURL: apiConfig.api_root,
  timeout: 10000,
  headers: {
    'Content-Type': apiConfig.content_type,
  },
})

request.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    const { baseURL, url } = error.config
    if (error.response) {
      console.error('Http_Not_Ok_Event', {
        address: baseURL + url,
        error: error.response,
      })
    } else {
      console.error('Http_Network_Error_Event', {
        address: baseURL + url,
        error: error,
      })
    }
    return Promise.reject(error.response)
  },
)


const httpService = ({
  url,
  body,
  params = {},
  method = 'GET',
  version = 'v1',
}) => {
  const mainUrl = `${version}/${url}`
  return request({
    url: mainUrl,
    method,
    data: body,
    params,
  })
}

export default httpService
