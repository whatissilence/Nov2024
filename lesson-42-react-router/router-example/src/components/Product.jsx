import { useParams } from 'react-router'

const Product = () => {
  let { productId } = useParams();

  document.title = `Product ${productId}`;


  return (
    <div>
      <h1>Product Id: {productId}</h1>
    </div>
  )
}

export default Product