/**
 * An Icon set.
 *
 * @param {object} type - Define an icon.
 * @param {object} style - Used to set styles for icons.
 * @param {string} className - The desired class Name for icons.
 * @returns {object} An Icon set.
 */
import { cloneElement, memo } from 'react'
import PropTypes from 'prop-types'

const iconPretext = 'icon-'
const IconWrapper = {
  arrowDown: <span className={`${iconPretext}arrow-down`} />,
  arrowUp: <span className={`${iconPretext}arrow-up`} />,
  arrowLeft: <span className={`${iconPretext}arrow-left`} />,
  searchNormal: <span className={`${iconPretext}search-normal`} />,
  moon: <span className={`${iconPretext}moon`} />,
  sun: <span className={`${iconPretext}sun`} />,
}
/** @function
 * @name Icon
 * @returns Requirment class name and style for icon is added.
 */
const Icon = ({ type, ...props }) => {
  let result = IconWrapper[type]
  let finalProps = { ...props }
  if (props.className) {
    finalProps = {
      ...finalProps,
      className: `${result.props.className} ${props.className}`,
    }
  }
  return cloneElement(result, finalProps)
}

const areEqual = (prevProps, nextProps) => prevProps.type === nextProps.type
export default memo(Icon, areEqual)
Icon.propType = {
  type: PropTypes.oneOf(Object.keys(IconWrapper)).isRequired,
}
