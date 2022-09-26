import {memo, useCallback, useEffect, useRef, useState} from 'react'
import PropTypes                                        from 'prop-types'
import Icon                                             from '../icons/Icon'
import styled                                           from 'styled-components'
import {breakpointsPX}                                  from 'helper/consts'

const Input = ({icon, placeholder, handleChange, name, value}) => {
  const [stateValue, onChangeStateValue] = useState(value)
  const refInput = useRef()

  const onFocus = useCallback(() => refInput?.current.focus(), [refInput])

  const onChange = useCallback(e => {
    handleChange({value: e.target.value, name})
  }, [name])

  useEffect(() => {
    onChangeStateValue(value)
  }, [value])

  return (
    <StyledInput
      className='py-1 d-flex border-radius-4 box-shadow px-2'
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
        className='text-14'
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
  handleChange: () => {}
}

Input.propTypes = {
  icon: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired || PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired
}

const areEqual = (prevProps, nextProps) => prevProps.value === nextProps.value

export default memo(Input, areEqual)

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

  transition: background-color 0.4s;
  background-color: var(--color-background-secondary);
  color: var(--color-primary);

  input::placeholder {
    color: var(--color-primary);
  }
`
