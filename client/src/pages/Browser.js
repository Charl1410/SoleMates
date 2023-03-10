import Card from "../components/Card";

import { useQuery } from "@apollo/client";
import { QUERY_FEATURED_PRODUCTS } from "../utils/queries";

const Browser = () => {
  const { loading, data } = useQuery(QUERY_FEATURED_PRODUCTS);
  const products = data?.products || [];

  return (
    <>
      <div className="w-75 border m-2 p-5">
        <div className="section-title">
          {products.map((product) => (
            <Card key={product.title} {...product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Browser;
