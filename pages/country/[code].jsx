import {getCountryService}    from 'api/services/country'
import Detail                 from 'components/pages/code/Detail'

const Code = props => <Detail {...props} />

export default Code

// export async function getStaticProps (context) {
//   try {
//     const result =
//       context.query.code && (await getCountryService(context.query.code))
//     return {
//       props: {
//         data_server: result,
//         query_server: context.query
//       }
//     }
//   } catch (e) {
//     return {
//       props: {
//         data_server: null,
//         query_server: context.query
//       }
//     }
//   }
// }
