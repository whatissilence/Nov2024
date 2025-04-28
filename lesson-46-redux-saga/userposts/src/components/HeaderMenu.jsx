import { NavLink } from 'react-router'

const HeaderMenu = () => {
  return (
    <ul className='header-menu'>
      <li>
        <NavLink to={`/`}>Home</NavLink>
      </li>
      <li>
        <NavLink to={`/users`}>Users</NavLink>
      </li>
    </ul>
  )
}

export default HeaderMenu