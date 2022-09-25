import { useCallback, useEffect, useState } from 'react'
import { getCountriesService } from 'api/services/country'
import CardCountry from './CardCountry'
import styled from 'styled-components'
import { breakpointsPX } from 'helper/consts'
import { useRouter } from 'next/router'

const Countries = ({ serverList }) => {
  const [queryParams, onChangeQueryParams] = useState({
    search: '',
    region: '',
  })
  const router = useRouter()

  const [list, onChangeList] = useState([])
  const [filterList, onChangeFilterList] = useState([])
  const getCountries = useCallback(() => {
    getCountriesService().then(res => onChangeList(res))
  }, [router.asPath])

  useEffect(() => {
    if (serverList.length === 0) {
      getCountries()
    } else {
      onChangeList(serverList)
    }
  }, [serverList])

  useEffect(() => {
    if (JSON.stringify(queryParams) !== JSON.stringify(router.query)) {
      handleSearch()
    }
  }, [queryParams])

  useEffect(() => {
    if (JSON.stringify(queryParams) !== JSON.stringify(router.query)) {
      onChangeQueryParams(router.query)
    }
  }, [router.query])

  const handleSearch = useCallback(() => {
    const { search, region } = queryParams
    const newFilterList =
      search || region
        ? list.filter(listItem => {
            if (region && search) {
              return (
                listItem.name.toLowerCase().includes(search.toLowerCase()) &&
                listItem.region.toLowerCase().includes(region.toLowerCase())
              )
            } else if (search) {
              return listItem.name.toLowerCase().includes(search.toLowerCase())
            } else {
              return listItem.region
                .toLowerCase()
                .includes(region.toLowerCase())
            }
          })
        : list
    onChangeFilterList(newFilterList)
  }, [queryParams, list])

  useEffect(() => {
    list.length !== 0 && handleSearch()
  }, [queryParams, list])

  return (
    <StyledCountries>
      {filterList.map(listItem => (
        <CardCountry
          key={listItem.name}
          data={listItem}
        />
      ))}
    </StyledCountries>
  )
}

Countries.defaultProps = {
  serverList: [],
}

export default Countries

const StyledCountries = styled.div`
  display: grid;
  column-gap: 75px;
  row-gap: 75px;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: ${breakpointsPX.mobile}) {
    grid-template-columns: repeat(1, 1fr);
  }
`
