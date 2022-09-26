import { memo } from 'react'
import styled from 'styled-components'
import { skeletonMixin } from './skeletonMixin'
import PropTypes from 'prop-types'
import { breakpointsPX } from 'helper/consts'

const Skeleton = ({ className, width, height }) => (
  <MainDiv
    className={`skeleton_main__any ${className || ''}`}
    style={{ width: width + 'px', height: height + 'px' }}>
    <div className='animation-skeleton w-100 h-100 d-block' />
  </MainDiv>
)

const areEqual = (prevProps, nextProps) =>
  prevProps.width === nextProps.width && prevProps.height === nextProps.height

export default memo(Skeleton, areEqual)

Skeleton.defaultProps = {
  width: 100,
  height: 40,
  className: '',
}
Skeleton.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
}
const MainDiv = styled.div`
  &.skeleton_main__any {
    display: inline-block;
    border-radius: 8px;
  }

  @media (max-width: ${breakpointsPX.mobile}) {
    max-width: calc(100vw - 2rem) !important;
  }
  ${skeletonMixin}
`
