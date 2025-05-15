import HeaderMenu from './HeaderMenu.jsx'
import { Outlet } from 'react-router'
import FooterMenu from './FooterMenu.jsx'

const Layout = () => {
  return (
    <>
      <HeaderMenu />
        <Outlet />
      <FooterMenu />
    </>
  )
}

export default Layout