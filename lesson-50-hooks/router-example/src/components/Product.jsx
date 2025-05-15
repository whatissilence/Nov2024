import { NavLink, useLocation, useParams } from 'react-router'
import MySuperLink from './MySuperLink.jsx'

const Product = () => {
  let { productId } = useParams();
  document.title = `Product ${productId}`;

  const location = useLocation();
  console.log('location', location);

  const products = [1, 2, 3, 44, 77, 121, 255];

  return (
    <div>
      {products.map(product => (
        <div key={product}>
          <MySuperLink to={`/products/${product}`} label={`Product ${product} - link`} />
        </div>
      ))}

      <h1>Product Id: {productId}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, sapiente.</p>
    </div>
  )
}

export default Product