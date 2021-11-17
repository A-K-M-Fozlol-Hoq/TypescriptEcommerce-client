import Product from "components/common/Product";
import React from "react";
import { Container, Row } from "react-bootstrap";
import { IProduct } from "types";
interface IProps {
  products: IProduct[];
}
const Products = ({ products }: IProps) => {
  return (
    <div>
      <Container className="my-5">
        <h1 className="mb-4">Latest products</h1>
        <Row>
          {products.map((product: IProduct) => (
            <Product key={product._id} product={product} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
