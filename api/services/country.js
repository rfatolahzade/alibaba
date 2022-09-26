import restAPI from '../httpClient'
import apiUrls from '../apiUrls'

export const getCountriesService = () =>
  restAPI({
    url: apiUrls.countries._get,
    version: 'v2',
  })

export const getCountryService = alphaCode =>
  restAPI({
    url: apiUrls.country._get,
    endPoint: `/${alphaCode}`,
    version: 'v2',
  }).then(res => {
    const currencies_code = res.currencies.map(resItem => resItem.code)
    const languages_name = res.languages.map(resItem => resItem.name)
    return { ...res, currencies_code, languages_name }
  })
