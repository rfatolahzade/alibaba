import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html
        lang='en-GB'
        className='dark'>
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
        </body>
      </Html>
    )
  }
}
