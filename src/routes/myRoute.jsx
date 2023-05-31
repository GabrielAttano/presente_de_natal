import { Route } from 'react-router-dom'

function MyRoute({component: Component, isClosed, ...rest}) {
  return <Route {...rest} element={Component} />
}

export default MyRoute