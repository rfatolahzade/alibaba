import styled from 'styled-components'
import PropTypes from 'prop-types'
import Icon from '../icons/Icon'
import { useCallback, useRef, useState } from 'react'
import { useOnClickOutside } from 'helper/helper'

const SelectBox = ({ label, list, selected, handleChange, name, classes }) => {
  const [isOpen, onToggleIsOpen] = useState()
  const ref = useRef()

  useOnClickOutside(ref, () => onToggleIsOpen(false))

  const handleOpen = useCallback(() => {
    onToggleIsOpen(!isOpen)
  }, [isOpen])

  const handleSelect = useCallback(selected => {
    handleChange({ value: selected, name })
    onToggleIsOpen(false)
  }, [])

  return (
    <StyledSelectBox
      className={`py-1 px-2  d-flex flex-column font-weight-300 border-radius-4  position-relative ${classes}`}
      ref={ref}>
      <div
        onClick={handleOpen}
        className='d-flex cursor-pointer justify-between items-center'>
        <span className='mr-1 select-box--label'>
          {selected ? selected : label}
        </span>
        <Icon
          type={'arrowDown'}
          className={`select-box--icon ${isOpen ? 'select-box--icon__up' : ''}`}
        />
      </div>
      {
        <ul
          className={`select-box-list ${
            isOpen ? 'select-box-list__open' : ''
          } position-absolute border-radius-4 right-0 left-0 w-100 mt-h bottom-0`}>
          {list.map(listItem => (
            <li
              className='py-q cursor-pointer px-2'
              onClick={() => handleSelect(listItem)}
              key={listItem.toString()}>
              {listItem}
            </li>
          ))}
        </ul>
      }
    </StyledSelectBox>
  )
}

SelectBox.defaultProps = {
  label: '',
  name: '',
  selected: '',
  handleChange: () => {},
  list: '',
  classes: '',
}

SelectBox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired || PropTypes.number.isRequired,
  list: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  classes: PropTypes.string,
}

export default SelectBox

const StyledSelectBox = styled.div`
  .select-box--label {
    width: 150px;
  }

  .select-box--icon {
    transition: transform 0.5s;
    &.select-box--icon__up {
      transform: rotate(180deg);
    }
  }

  @media (prefers-color-scheme: dark) {
    background-color: var(--blue-dark);
    color: var(--white);
  }

  @media (prefers-color-scheme: light) {
    background-color: var(--white);
    box-shadow: var(--shadow);
    color: var(--dark-900);
  }

  .select-box-list {
    top: 100%;
    z-index: 10;
    height: 0;
    transition: all 0.5s;
    padding: 0;
    overflow: hidden;
    &.select-box-list__open {
      padding: 10px 0;
      height: calc(100% + 2rem);
    }
    @media (prefers-color-scheme: dark) {
      background-color: var(--blue-dark);
      color: var(--white);
    }

    @media (prefers-color-scheme: light) {
      background-color: var(--white);
      box-shadow: var(--shadow);
      color: var(--dark-900);
    }
  }
`
