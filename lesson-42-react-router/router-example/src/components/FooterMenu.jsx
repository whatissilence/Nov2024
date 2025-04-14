import { NavLink } from 'react-router'
import routes from '../routes.jsx'

const FooterMenu = () => {
  return (
    <ul className="footer-menu">
      {routes.map((route) => (
        <li key={route.path}>
          <NavLink to={`/${route.path}`}>{route.label}</NavLink>
        </li>
      ))}
    </ul>
  )
}

export default FooterMenu