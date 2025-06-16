import express from 'express';
import { createUser, editUser, getUserById, getUsers } from './services/usersService.js'
import cors from 'cors';
import { deletePost, editPost, getPostById, getPosts, getPostsByUserId } from './services/postsService.js'
import { deleteComment, getCommentById, getCommentsByPostId } from './services/commentsService.js'

const PORT = 4000;
const app = express();

app.use(cors({
  origin: true,
}));

app.use(express.json());

// TODO exclude to users controller ================
app.get('/users', (req, res) => {
  const users = getUsers();
  res.json(users);
})

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  const user = getUserById(userId);

  if(!user) {
    res.status(404).send('No such user');
    return;
  }

  res.json(user);
})

app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const user = getUserById(userId);

  if(!user) {
    res.status(404).send('No such user');
    return;
  }

  const data = req.body;
  const result = editUser(userId, data);
  res.json(result);
})

app.post('/users', (req, res) => {
  const data = req.body;

  const user = createUser(data);
  res.json(user);
})

// TODO exclude to posts controller ==================
app.get('/posts', (req, res) => {
  const { userId } = req.query;
  let posts;

  if(userId) {
    posts = getPostsByUserId(userId);
  } else {
    posts = getPosts();
  }

  res.json(posts);
})

app.get('/posts/:id', (req, res) => {
  const postId = req.params.id;
  const post = getPostById(postId);

  if(!post) {
    res.status(404).send('No such post');
    return;
  }

  res.json(post);
})

app.put('/posts/:id', (req, res) => {
  const postId = req.params.id;
  const post = getPostById(postId);

  if(!post) {
    res.status(404).send('No such post');
    return;
  }

  const data = req.body;
  const result = editPost(postId, data);
  res.json(result);
})

app.delete('/posts/:id', (req, res) => {
  const postId = req.params.id;

  const deletedPost = deletePost(postId);
  if(!deletedPost) {
    res.status(404).send('No such post');
    return;
  }

  res.json(deletedPost);
})

app.get('/posts/:id/comments', (req, res) => {
  const postId = req.params.id;
  const post = getPostById(postId);

  if(!post) {
    res.status(404).send('No such post');
    return;
  }

  const comments = getCommentsByPostId(postId);
  res.json(comments);
})

app.delete('/posts/:postId/comments/:commId', (req, res) => {
  const { postId, commId } = req.params;
  const post = getPostById(postId);

  if(!post) {
    res.status(404).send('No such post');
    return;
  }

  const deletedComment = deleteComment(commId);

  if(!deletedComment) {
    res.status(404).send('No such comment');
    return;
  }

  res.json(deletedComment);
})


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})




