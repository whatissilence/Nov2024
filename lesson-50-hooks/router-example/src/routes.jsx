import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contacts from './components/Contacts.jsx'
import Products from './components/Products.jsx'
import Product from './components/Product.jsx'

const routes = [
  {
    path: '',
    element: <Home />,
    label: 'Sweet Home'
  },
  {
    path: 'about',
    element: <About />,
    label: 'About'
  },
  {
    path: 'contacts',
    element: <Contacts />,
    label: 'Contacts'
  },
  {
    path: 'products',
    element: <Products />,
    label: 'Products'
  }
];

export default routes;