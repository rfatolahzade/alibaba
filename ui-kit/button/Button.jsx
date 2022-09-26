import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Icon from '../icons/Icon'
import Link from 'next/link'

const MainButton = ({ icon, title }) => (
  <div className='d-flex items-center'>
    {icon && (
      <Icon
        type={icon}
        className={'mr-q text-16'}
      />
    )}
    {title}
  </div>
)

const Button = ({ title, icon, href, size, classes }) => (
  <StyledButton
    className={`box-shadow border-radius-4 cursor-pointer font-weight-300 text-capitalize ${
      size === 'small' ? 'py-1 px-3' : 'py-1 px-4'
    }  ${classes}`}>
    {href ? (
      <Link href={href}>
        <a href={href}>
          <MainButton
            icon={icon}
            title={title}
          />
        </a>
      </Link>
    ) : (
      <MainButton
        icon={icon}
        title={title}
      />
    )}
  </StyledButton>
)

export default Button

Button.defaultProps = {
  title: '',
  icon: '',
  href: '',
  classes: '',
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  href: PropTypes.string,
  classes: PropTypes.string.isRequired,
}

const StyledButton = styled.button`
  border: none;
  outline: none;
  @media (prefers-color-scheme: dark) {
    background-color: var(--blue-dark);
    color: var(--white);
  }

  @media (prefers-color-scheme: light) {
    background-color: var(--white);
    box-shadow: var(--shadow);
    color: var(--dark-900);
  }
`
