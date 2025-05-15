import Team from './Team.jsx'
import { useLocation } from 'react-router'

const About = () => {
  const location = useLocation();
  console.log('location',location);


  document.title = 'About';
  return (
    <div>
      <h1>About us</h1>
      <Team />
    </div>
  )
}

export default About