import { useRouteError } from 'react-router'

const ErrorBoundary = () => {
  const error = useRouteError();

  console.log('Error', error.message)

  return (
    <div>
      <h3>Oops. Something happened! Please refresh page or call administrator.</h3>
    </div>
  )
}

export default ErrorBoundary