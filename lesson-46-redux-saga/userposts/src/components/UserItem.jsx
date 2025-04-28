import { Link } from 'react-router'

const UserItem = ({id, name, email}) => {
  return (
    <div>
      <Link to={`/users/${id}`}>Id: {id}</Link>
      <div>Name: {name}</div>
      <div>Email: {email}</div>
      <hr />
    </div>
  )
}

export default UserItem