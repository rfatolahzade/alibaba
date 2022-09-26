import React, { useCallback, useEffect, useState } from 'react'
import Icon from 'ui-kit/icons/Icon'
import ui from 'dictionaries/ui'
import styled from 'styled-components'

const Header = () => {
  const [isDarkTheme, onToggleIsDarkTheme] = useState(undefined)
  const handleToggle = useCallback(() => {
    onToggleIsDarkTheme(!isDarkTheme)
  }, [isDarkTheme])
  const storeUserSetPreference = useCallback(
    pref => {
      typeof window !== 'undefined' && localStorage.setItem('theme', pref)
    },
    [typeof window !== 'undefined' && window],
  )

  const root = typeof window !== 'undefined' && document.documentElement
  useEffect(() => {
    const initialColorValue = root.style.getPropertyValue(
      '--initial-color-mode',
    )
    onToggleIsDarkTheme(initialColorValue === 'dark')
  }, [])
  useEffect(() => {
    if (isDarkTheme !== undefined) {
      if (isDarkTheme) {
        root.setAttribute('data-theme', 'dark')
        onToggleIsDarkTheme(true)
        storeUserSetPreference('dark')
      } else {
        root.removeAttribute('data-theme')
        onToggleIsDarkTheme(false)

        storeUserSetPreference('light')
      }
    }
  }, [isDarkTheme])

  return (
    <StyledHeader className='py-1 box-shadow'>
      <div className='container'>
        <div className='d-flex justify-between'>
          <h4 className='text-21 font-weight-800'>{ui.header.title}</h4>

          <div
            className='d-flex justify-between items-center cursor-pointer'
            onClick={handleToggle}>
            <Icon type={isDarkTheme ? 'sun' : 'moon'} />
            <h6 className='ml-1 text-14 font-weight-600 text-capitalize'>
              {!isDarkTheme ? ui.header.dark : ui.header.light} {ui.header.mode}
            </h6>
          </div>
        </div>
      </div>
    </StyledHeader>
  )
}
export default Header

const StyledHeader = styled.header`
  transition: background-color 0.4s;
  background-color: var(--color-background-secondary);
`
