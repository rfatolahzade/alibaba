import React, { useCallback, useState } from 'react'
import Input from 'ui-kit/input/Input'
import ui from 'dictionaries/ui'
import SelectBox from 'ui-kit/select-box/SelectBox'
import styled from 'styled-components'
import { breakpointsPX } from 'helper/consts'

const TopBar = () => {
  const [search, onChangeSearch] = useState('')

  const handleChange = useCallback(e => {
    onChangeSearch(e.value)
  }, [])

  return (
    <StyledTopBar className='d-flex my-4 justify-between'>
      <Input
        placeholder={ui.home.top_bar.search}
        icon='searchNormal'
        name='search'
        value={search}
        handleChange={handleChange}
      />
      <SelectBox
        label={ui.home.top_bar.filter_region}
        name={'region'}
        list={['Asia', 'Africa']}
        classes='top-bar--select-box'
      />
    </StyledTopBar>
  )
}
export default TopBar

const StyledTopBar = styled.div`
  @media (max-width: ${breakpointsPX.mobile}) {
    flex-direction: column;
    .top-bar--select-box {
      margin-top: 2.5rem;
    }
  }
`
