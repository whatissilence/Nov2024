import { NavLink, useSearchParams } from 'react-router'
import { useState } from 'react'

const Products = () => {
  document.title = 'Products';
  const [count, setCount] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const products = [1, 2, 3, 44, 77, 121, 255];
  const filter = searchParams.get('filter');

  const filteredProducts = filter ? products.filter(pr => pr % filter === 0) : products;

  const handleChangeCounter = () => {
    setCount(count + 1);

    searchParams.set('filter', String(count + 1));
    searchParams.set('movie', 'LA?LA?LAND');
    setSearchParams(searchParams);
  }

  return (
    <div>
      <h1>Products</h1>
      <button onClick={handleChangeCounter}>
        count is {count}
      </button>
      <hr />
      {filteredProducts.map(product => (
        <div key={product}>
          <NavLink to={`/products/${product}`}>Product Id: {product}</NavLink>
        </div>
      ))}


    </div>
  )
}

export default Products