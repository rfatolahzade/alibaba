import { getCountryService } from 'api/services/country'
import Detail from 'components/pages/code/Detail'
import { isClientSideNavigate } from 'helper/helper'

const Code = props => <Detail {...props} />

export default Code

export async function getServerSideProps(context) {
  if (isClientSideNavigate(context))
    return {
      props: {
        data: null,
        query_server: context.query,
      },
    }
  try {
    const result =
      context.query.code && (await getCountryService(context.query.code))
    return {
      props: {
        data_server: result,
        query_server: context.query,
      },
    }
  } catch (e) {
    return {
      props: {
        data: null,
        query_server: context.query,
      },
    }
  }
}
