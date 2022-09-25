import {useCallback, useEffect, useState} from 'react'
import {getCountriesService}              from 'api/services/country'
import CardCountry                        from './CardCountry'
import styled                             from 'styled-components'

const Countries = ({serverList}) => {
  const [list, onChangeList] = useState([])
  const getCountries = useCallback(() => {
    getCountriesService()
      .then((res) => onChangeList(res))
  }, [])

  useEffect(() => {
    if (serverList.length === 0) {
      getCountries()
    } else {
      onChangeList(serverList)
    }
  }, [serverList])
  return <StyledCountries>
    {list.map(listItem => <CardCountry key={listItem.name} data={listItem}/>)}
  </StyledCountries>
}

Countries.defaultProps = {
  serverList: []

}

export default Countries

const StyledCountries = styled.div`
  display: grid;
  column-gap: 75px;
  row-gap: 75px;
  grid-template-columns: repeat(4, 1fr);
`