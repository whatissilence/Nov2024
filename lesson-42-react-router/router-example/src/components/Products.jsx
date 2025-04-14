import { NavLink } from 'react-router'

const Products = () => {
  document.title = 'Products';

  const products = [1, 2, 3, 44,77, 121, 255]


  return (
    <div>
      <h1>Products</h1>
      {products.map(product => (
        <div key={product}>
          <NavLink to={`/products/${product}`} >Product Id: {product}</NavLink>
        </div>
      ))}


    </div>
  )
}

export default Products