import { Link, useMatch } from 'react-router'


export default function MySuperLink({ to, label }) {
  // Використання useMatch для перевірки, чи відповідає посилання активному маршруту
  const match = useMatch(to);

  if (match) {
    return null;
  }

  return (
    <div>
      <Link to={to} >
        {label}
      </Link>
    </div>
  );
}