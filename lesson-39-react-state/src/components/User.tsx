import UserStatus from './UserStatus.tsx'

interface UserProps {
  id: number,
  name: string,
  email: string,
  username: string,
  online?: boolean,
  toggleOnline: (id: number) => void,
  deleteUser: (id: number) => void,
  isLast: boolean,
}

export default function User({ id, name, email, username, online, toggleOnline, deleteUser, isLast }: UserProps) {

  function getStatusText() {
    if (online) {
      return <sup>online</sup>
    }

    return <sup>1 hour ago</sup>
  }

  return (
    <>
      {/*<div>Id: {id} <UserStatus online={!!online} /> {!online && <sup>1 hour ago</sup>}</div>*/}
      <div>
        Id: {id}
        <UserStatus online={!!online} />
        { getStatusText() }
        {
          // online
          //   ? <sup>Online</sup>
          //   : <sup>1 hour ago</sup>
        }
      </div>
      <div>Name: {name}</div>
      <div>Email: {email}</div>
      <div>Username: {username}</div>
      <button onClick={() => { toggleOnline(id) }}>Toggle</button>
      { !isLast && <button onClick={() => { deleteUser(id) }}>Delete</button>}
      <hr />
    </>
  )
}