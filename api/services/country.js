import restAPI from '../httpClient'
import apiUrls from '../apiUrls'

export const getCountriesService = () =>
  restAPI({
    url: apiUrls.countries._get,
    version: 'v2'
  })
