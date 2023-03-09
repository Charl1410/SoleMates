import ProductCard from '../components/Card'

import { useQuery } from '@apollo/client';
import { QUERY_FEATURED_PRODUCTS } from '../utils/queries';

import { useCart } from '../context/CartContext'

const Home = () => {
    
  
    const { onAddToCart } = useCart()
  
    const { loading, data } = useQuery(QUERY_FEATURED_PRODUCTS);
    const products = data?.products || [];
  
    return (
      <>
        <div className='w-75 border m-2 p-5'>
          <div className='section-title'>
            {products.map(product => (
              <ProductCard key={product.title} {...product} onAddToCart={()=>onAddToCart(product)} />
            ))}
          </div>
        </div>  
      </>
    )
            }

export default Home