// UI Components
import Card from '../components/Card'

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_PRODUCT } from '../utils/queries';

const Product = () => {

  const params = useParams();
  const { productId } = useParams();

  console.log('params: ', params)

  const { loading, data } = useQuery(QUERY_SINGLE_PRODUCT, {
    // pass URL parameter
    variables: { productId: productId },
  });

  const product = data?.product || {};
  const productTitle = loading ? 'Loading Product...' : data?.product.title;
  console.log(`Product: products = ${data}`)

  return (
    <>
      <div className='p-5 m-2 border w-75'>
        <h1>{productTitle}</h1>
        <div className='section-title '>

          <Card key={product.title} {...product} />

        </div>
      </div>
    </>
  )
}

export default Product