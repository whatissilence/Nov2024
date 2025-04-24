import { User } from '../types/User.interface.ts'

const UserItem = ({id, name, email} : User) => {
  return (
    <div>
      <div>Id: {id}</div>
      <div>Name: {name}</div>
      <div>Email: {email}</div>
      <hr />
    </div>
  )
}

export default UserItem