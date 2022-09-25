import { useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import Icon from '../icons/Icon'
import styled from 'styled-components'
import { breakpointsPX } from '../../helper/consts'

const Input = ({ icon, placeholder, handleChange, name, value }) => {
  const [stateValue, onChangeStateValue] = useState(value)
  const refInput = useRef()

  const onFocus = useCallback(() => refInput?.current.focus(), [refInput])

  const onChange = useCallback(e => {
    handleChange({ value: e.target.value, name })
  }, [])

  useEffect(() => {
    onChangeStateValue(value)
  }, [value])

  return (
    <StyledInput
      className='py-1 d-flex border-radius-4 px-2'
      onClick={onFocus}>
      {icon && (
        <Icon
          className={'mr-2'}
          type={icon}
        />
      )}
      <input
        autoComplete='off'
        ref={refInput}
        placeholder={placeholder}
        name={name}
        value={stateValue}
        onChange={onChange}
      />
    </StyledInput>
  )
}

Input.defaultProps = {
  icon: '',
  placeholder: '',
  name: '',
  value: '',
  handleChange: () => {},
}

Input.propTypes = {
  icon: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired || PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default Input

const StyledInput = styled.div`
  input {
    width: 370px;
    border: none;
    outline: none;
    background: none;
    font-weight: var(--font-weight-600);
    @media (max-width: ${breakpointsPX.mobile}) {
      width: 100%;
    }
  }

  input:focus {
    width: 370px;
    border: none;
    outline: none;
    background: none;
  }

  input::placeholder {
    font-weight: var(--font-weight-300);
  }

  @media (prefers-color-scheme: dark) {
    background-color: var(--blue-dark);
    color: var(--white);
    input::placeholder {
      color: var(--white);
    }
  }

  @media (prefers-color-scheme: light) {
    background-color: var(--white);
    box-shadow: var(--shadow);
    color: var(--dark-900);
    input::placeholder {
      color: var(--dark-900);
    }
  }
`
