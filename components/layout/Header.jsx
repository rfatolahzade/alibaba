import React from 'react'
import Icon from 'ui-kit/icons/Icon'
import ui from 'dictionaries/ui'
import styled from 'styled-components'

const Header = () => (
  <StyledHeader className='py-2'>
    <div className='container'>
      <div className='d-flex justify-between'>
        <h1 className='text-21 font-weight-800'>{ui.header.title}</h1>
        <div className='d-flex justify-between items-center cursor-pointer'>
          <Icon type='moon' />
          <h6 className='ml-1 text-14 font-weight-600'>Dark mode</h6>
        </div>
      </div>
    </div>
  </StyledHeader>
)

export default Header

const StyledHeader = styled.header`
  @media (prefers-color-scheme: dark) {
    background-color: var(--blue-dark);
  }

  @media (prefers-color-scheme: light) {
    background-color: var(--white);
    box-shadow: var(--shadow);
  }
`
