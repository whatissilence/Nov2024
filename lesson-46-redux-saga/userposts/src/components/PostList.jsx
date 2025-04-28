import { useDispatch, useSelector } from 'react-redux'
import { postsLoadingSelector, postsSelector } from '../redux/selectors.js'
import { useEffect } from 'react'
import { requestPostByUserId } from '../redux/postsSlice.js'

const PostList = ({userId}) => {
  const dispatch = useDispatch();
  const posts = useSelector(postsSelector(userId));
  const loading = useSelector(postsLoadingSelector);

  useEffect(() => {
    if (!posts?.length) {
      dispatch(requestPostByUserId(userId));
    }
  }, [])


  return (
    <div>
      <h3>Posts:</h3>
      {loading && <b>Loading ...</b>}
      <div style={{border: '2px solid black'}}></div>
      {!loading && posts?.length && posts.map((post) => (
        <div key={post.id}>
          <div>Post id: {post.id}</div>
          <div><b>{post.title}</b></div>
          <div>{post.body}</div>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default PostList