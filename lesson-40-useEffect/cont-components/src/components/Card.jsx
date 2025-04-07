import '../css/Card.css';

// export default function Card(props) {
//   return <div className="card">{props.children}</div>;
// }

export default function Card({children, color}) {
  return <div className="card" style={{'background-color': color}}>{children}</div>;
}