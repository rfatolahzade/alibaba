import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

function setInitialColorMode() {
  function getInitialColorMode() {
    const preference = window.localStorage.getItem('theme')
    const hasExplicitPreference = typeof preference === 'string'
    /**
     * If the user has explicitly chosen light or dark,
     * use it. Otherwise, this value will be null.
     */
    if (hasExplicitPreference) {
      return preference
    }
    // If there is no saved preference, use a media query
    const mediaQuery = '(prefers-color-scheme: dark)'
    const mql = window.matchMedia(mediaQuery)
    const hasImplicitPreference = typeof mql.matches === 'boolean'
    if (hasImplicitPreference) {
      return mql.matches ? 'dark' : 'light'
    }
    // default to 'light'.
    return 'light'
  }
  const colorMode = getInitialColorMode()
  const root = document.documentElement
  root.style.setProperty('--initial-color-mode', colorMode)
  // add HTML attribute if dark mode
  if (colorMode === 'dark')
    document.documentElement.setAttribute('data-theme', 'dark')
}
// our function needs to be a string
const blockingSetInitialColorMode = `(function() {
		${setInitialColorMode.toString()}
		setInitialColorMode();
})()
`

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en-GB'>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap'
            rel='stylesheet'
          />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <title>Frontend challenge code | REST Countries API </title>
        </Head>
        <body>
          <>
            <Main />
            <NextScript />
          </>
          <script
            dangerouslySetInnerHTML={{
              __html: blockingSetInitialColorMode,
            }}></script>
        </body>
      </Html>
    )
  }
}
