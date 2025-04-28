import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Provider } from 'react-redux'
import NotFound from './components/NotFound.jsx'
import Layout from './components/Layout.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import UserList from './components/UserList.jsx'
import { store } from './redux/store.js'
import Home from './components/Home.jsx'
import User from './components/User.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/users',
        element: <UserList />,
      },
      {
        path: '/users/:userId',
        element: <User />,
      },
      {
        path: '*',
        element: <NotFound />,
      }
    ]
  },
]);

const App = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

export default App;
