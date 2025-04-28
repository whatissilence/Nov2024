import { useDispatch, useSelector } from 'react-redux'
import { usersLoadingSelector, usersSelector } from '../redux/selectors.js'
import UserItem from './UserItem.jsx'
import { useEffect } from 'react'
import { getUsersFromServer } from '../redux/usersSlice.js'

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(usersSelector);
  const loading = useSelector(usersLoadingSelector);

  useEffect(() => {
    console.log('users', users, users?.length)
    if (!users?.length) {
      dispatch(getUsersFromServer());
    }
  }, [])

  return (
    <div>
      <h3>Users:</h3>
      {loading && <b>Loading ...</b>}
      <div style={{border: '2px solid black'}}></div>
      {!loading && users.map((user) => (
        <UserItem key={user.id} {...user} />
      ))}
    </div>
  )
}

export default UserList