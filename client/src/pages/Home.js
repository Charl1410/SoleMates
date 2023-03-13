import React from 'react';
import Hero from '../components/Hero';
import NewCards from '../components/newCards';

import { useQuery } from "@apollo/client";
import { QUERY_FEATURED_PRODUCTS } from "../utils/queries";

const Home = () => {
  // const { onAddToCart } = useCart()
  const { loading, data } = useQuery(QUERY_FEATURED_PRODUCTS);

  const products = data?.products || [];
  const shuffledProducts = [...products].sort(() => Math.random() - 0.5);
  const featuredProducts = shuffledProducts.slice(0, 3);
  
  return (
    <div>
      <Hero />
      <h1>Newest Products</h1>
      <div className='section-title'>
        {featuredProducts.map(product => (
          <NewCards key={product.title} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Home
