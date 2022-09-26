import styled          from 'styled-components'
import {skeletonMixin} from './skeletonMixin'
import PropTypes       from 'prop-types'
import {breakpointsPX} from 'helper/consts'

const Skeleton = ({className, style, width, height, children}) =>
  <MainDiv className={`skeleton_main__any ${className || ''}`}
           style={{width: width + 'px', height: height + 'px', ...style}}>
    <div className="animation-skeleton w-100 h-100 d-block">{children}</div>
  </MainDiv>


export default Skeleton

Skeleton.defaultProps = {
  style: {},
  width: 100,
  height: 40,
  children: <></>,
  className: ''
}
Skeleton.propTypes = {
  style: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string
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
