import { useState } from 'react'
import { usersData } from '../usersData';
import { UserData } from '../interfaces/UserData.interface.ts'
import User from './User.tsx'

type UserState = [ UserData[], any ];

export default function Users() {
  const [ users, setUsers ]: UserState = useState(usersData);

  function handleToggleOnline(id: number) {
    console.log('Toggle Online', id);
    setUsers(users.map(user => {
      if (user.id === id) {
        user.online = !user.online;
      }

      return user;
    }))
  }

  function handleDeleteUser(id: number) {
    console.log('Delete', id);
    setUsers(users.filter(user => user.id !== id));
  }

  function addUser(newUser: UserData) {
    setUsers([...users, newUser]);
  }

  return (
    <>
      {
        users.map((user: UserData) =>
          // <User key={user.id} id={user.id} name={user.name} email={user.email} username={user.username} online={user.online} />
          <User key={user.id} toggleOnline={handleToggleOnline} deleteUser={handleDeleteUser} isLast={users.length === 1} {...user} />
        )
      }
      <button onClick={() => {
        addUser({
          id: users[users.length - 1].id + 1,
          name: 'John Wick',
          email: 'john@gmail.com',
          username: 'Run!',
          online: true,
        })
      }}>Add</button>
    </>
  )
}