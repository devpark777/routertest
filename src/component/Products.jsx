import { Link } from 'react-router-dom'

function Products({list}) {
  return (
    <div>
        <h2>Product List</h2>
        <div className="product-list">
        {
          list.map((product)=>(
            <div key={product.id} className="product-item">
              <h3>{product.name}</h3>
              <img src="/routertest/images/laptop.png" alt={product.name} width={150} />
              <p>{product.price}</p> 
              <Link to={`/productlist/${product.id}`}>View Detail</Link>
            </div>  
          ))  
        }
        </div>
    </div>
  )
}
export default Products;
