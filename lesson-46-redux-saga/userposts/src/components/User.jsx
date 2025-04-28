import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { usersSelector } from '../redux/selectors.js'
import { useEffect } from 'react'
import { getUsersFromServer } from '../redux/usersSlice.js'
import PostList from './PostList.jsx'

const User = () => {
  const dispatch = useDispatch()
  const { userId } = useParams()
  const users = useSelector(usersSelector)

  useEffect(() => {
    if (!users?.length) {
      dispatch(getUsersFromServer())
    }
  }, [])

  const user = users.find((u) => u.id === Number(userId));

  return (
    <div>
      User: {userId}
      {user && (
        <div>
          <div>Id: {user.id}</div>
          <div>Name: {user.name}</div>
          <div>Email: {user.email}</div>
          <hr />
          <PostList userId={userId} />
        </div>
      )}
      {!user && <div>User not found</div>}
    </div>
  )
}

export default User