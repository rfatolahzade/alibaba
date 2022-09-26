import {css} from 'styled-components'

export const skeletonMixin = css`
.animation-skeleton {
  animation-duration: 1.0s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: placeholderAnimate;
  background: lightgray; // Fallback
  background: linear-gradient(to right, var(--color-background-secondary) 4%, var(--color-background) 50%, var(--color-background-secondary) 66%);
  background-size: 1300px; // Animation Area
  border-radius: 4px;
}

@keyframes placeholderAnimate {
  0%{ background-position: -650px 0; }
  100%{ background-position: 650px 0; }
}
`