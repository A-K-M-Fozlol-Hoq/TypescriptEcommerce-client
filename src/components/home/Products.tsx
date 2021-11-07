import Product from "components/common/Product";
import React from "react";
import { Container, Row } from "react-bootstrap";

const Products = () => {
  return (
    <div>
      <Container className="my-5">
        <h1 className="mb-4">Latest products</h1>
        <Row>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
        </Row>
      </Container>
    </div>
  );
};

export default Products;
