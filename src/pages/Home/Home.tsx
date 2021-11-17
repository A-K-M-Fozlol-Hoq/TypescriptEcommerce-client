import Banner from "components/home/Banner";
import Products from "components/home/Products";
import React, { useEffect, useState } from "react";
import ProductService from "services/ProductService";
import { IProduct } from "types";
const Home = () => {
  // const [ products, setProducts ] = useState<IProduct[]>([] as IProduct);
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    ProductService.getProducts().then((res) => setProducts(res));
  });
  return (
    <div>
      <Banner></Banner>
      <Products products={products}></Products>
    </div>
  );
};

export default Home;
