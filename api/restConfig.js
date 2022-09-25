const apiConfig = Object.freeze({
  api_root: process.env.NEXT_PUBLIC_REACT_APP_BASE_URL_API,
  content_type: 'application/json; charset=utf-8',
  cache_control: 'no-cache, no-store, must-revalidate',
  pragma: 'no-cache',
})

export default apiConfig
