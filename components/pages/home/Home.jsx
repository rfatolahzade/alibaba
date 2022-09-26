import TopBar from './TopBar'
import Countries from './Countries'

const Home = props => {
  return (
    <div className='mt-q mb-4'>
      <TopBar />
      <Countries serverList={props.countries} />
    </div>
  )
}

export default Home
