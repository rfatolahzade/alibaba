import TopBar from './TopBar'
import Countries from './Countries'

const Home = props => {
  return (
    <div className='mt-q'>
      <TopBar />
      <Countries serverList={props.countries} />
    </div>
  )
}

export default Home
