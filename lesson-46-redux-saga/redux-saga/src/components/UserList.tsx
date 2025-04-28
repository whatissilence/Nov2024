import { useDispatch, useSelector } from 'react-redux'
import { usersCurrentIdSelector, usersLoadingSelector, usersSelector } from '../redux/selectors.ts'
import { User } from '../types/User.interface.ts'
import UserItem from './UserItem.tsx'
import { AppDispatch } from '../redux/store.ts'
import { useEffect } from 'react'
import { getUsersFromServer, next, prev } from '../redux/usersSlice.ts'

const UserList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users: User[] = useSelector(usersSelector);
  const loading: boolean = useSelector(usersLoadingSelector);
  const currentUserId: number = useSelector(usersCurrentIdSelector);

  useEffect(() => {
    dispatch(getUsersFromServer());
  }, [])

  const currentUser: User = users.find(u => u.id === currentUserId) || {
    id: currentUserId,
    name: '',
    email: ''
  };

  return (
    <div>
      <h3>Users:</h3>
      {loading && <b>Loading ...</b>}
      {currentUser.name && <UserItem {...currentUser} />}
      <div>
        <button onClick={() => { dispatch(prev())}}>Prev</button>
        <button onClick={() => { dispatch(next())}}>Next</button>
      </div>

      <div style={{border: '2px solid black'}}></div>
      {!loading && users.map((user: User) => (
        <UserItem key={user.id} {...user} />
      ))}
    </div>
  )
}

export default UserList