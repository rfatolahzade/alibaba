import { memo, useCallback, useEffect, useState } from 'react'
import Input from 'ui-kit/input/Input'
import ui from 'dictionaries/ui'
import SelectBox from 'ui-kit/select-box/SelectBox'
import styled from 'styled-components'
import { breakpointsPX } from 'helper/consts'
import { useRouter, withRouter } from 'next/router'

const Regions = ['all', 'africa', 'america', 'asia', 'europe', 'oceania']

const TopBar = () => {
  const router = useRouter()
  const [queryParams, onChangeQueryParams] = useState(router.query)
  const updateUrl = useCallback(() => {
    router.push(
      {
        query: queryParams,
      },
      undefined,
      { shallow: false },
    )
  }, [queryParams])

  const handleChange = useCallback(
    e => {
      let value = e.value
      if (e.value === 'all') {
        value = ''
      }
      onChangeQueryParams(prevState => ({ ...prevState, [e.name]: value }))
    },
    [queryParams],
  )

  useEffect(() => {
    if (JSON.stringify(queryParams) !== JSON.stringify(router.query)) {
      updateUrl()
    }
  }, [queryParams])

  useEffect(() => {
    if (JSON.stringify(queryParams) !== JSON.stringify(router.query)) {
      onChangeQueryParams(router.query)
    }
  }, [router.query])

  return (
    <StyledTopBar className='d-flex my-4 justify-between'>
      <Input
        placeholder={ui.home.top_bar.search}
        icon='searchNormal'
        name='search'
        value={queryParams.search || ''}
        handleChange={handleChange}
      />
      <SelectBox
        label={ui.home.top_bar.filter_region}
        name={'region'}
        list={Regions.filter(region => region !== 'all' || queryParams.region)}
        classes='top-bar--select-box'
        selected={queryParams.region || ''}
        handleChange={handleChange}
      />
    </StyledTopBar>
  )
}
const areEqual = (prevProps, nextProps) =>
  JSON.stringify(prevProps.router?.query) ===
  JSON.stringify(nextProps.router?.query)

export default memo(withRouter(TopBar), areEqual)

const StyledTopBar = styled.div`
  @media (max-width: ${breakpointsPX.mobile}) {
    flex-direction: column;
    .top-bar--select-box {
      margin-top: 2.5rem;
    }
  }
`
