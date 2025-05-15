import { NavLink } from 'react-router'

const Home = () => {
  document.title = 'Router Demo';
  return (
    <div>
      <h1>Home page</h1>
      <NavLink to={`/team`} >To team</NavLink>
    </div>
  )
}

export default Home