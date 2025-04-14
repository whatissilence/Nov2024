import './App.css'
import { createBrowserRouter, RouterProvider, BrowserRouter as Router,  Route, Routes } from 'react-router'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contacts from './components/Contacts.jsx'
import NotFound from './components/NotFound.jsx'
import Layout from './components/Layout.jsx'
import routes from './routes.jsx'
import Product from './components/Product.jsx'
import Team from './components/Team.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      ...routes,
      {
        path: 'products/:productId',
        element: <Product />,
        label: 'Product'
      },{
        path: 'team',
        element: <Team />,
      },
      {
        path: '*',
        element: <NotFound />,
      }
    ]
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;




// Приклад сучасний з обʼєктами ==============================
//
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />,
//       },
//       {
//         path: 'about',
//         element: <About />,
//       },
//       {
//         path: 'contacts',
//         element: <Contacts />,
//         children: [
//           {
//             path: 'team',
//             element: <Team />,
//           }
//         ]
//       },
//       {
//         path: '*',
//         element: <NotFound />,
//       }
//     ]
//   },
// ]);
//
// const App = () => <RouterProvider router={router} />;
//
// export default App;




// Приклад сучасний з компонентами ========================================

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/about" element={<About/>} />
//         <Route path="/contacts/team" element={<Team/>} />
//         <Route path="/contacts" element={<Contacts/>} />
//         <Route path="*" element={<NotFound/>} />
//       </Routes>
//     </Router>
//   )
// }
//
// export default App
