import { useEffect } from 'react'

export function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}

export const isClientSideNavigate = context => {
  return (
    !!context.req.headers.referer &&
    context.req.headers.referer.includes(context.req.headers.host)
  )
}

export function commaSeparateNumber(x) {
  if (!x) x = 0
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
