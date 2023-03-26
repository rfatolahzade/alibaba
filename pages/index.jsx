import Home                   from 'components/pages/home/Home'
import {getCountriesService}  from 'api/services/country'

export default function Index (props) {
  return <Home {...props} />
}

export async function getStaticProps (context) {
  try {
    const result_countries = await getCountriesService()
    return {
      props: {
        countries: result_countries || []
      }
    }
  } catch (e) {
    return {
      props: {
        countries: []
      }
    }
  }
}
