import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <Link to="/users" style={{ marginRight: '1rem' }}>Users</Link>
      <Link to="/posts">Posts</Link>
    </nav>
  );
}