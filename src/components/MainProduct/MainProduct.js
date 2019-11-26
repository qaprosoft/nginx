import React from 'react';
import { Container } from 'react-bootstrap';
import Product from './Product';
import './main-product.css';

const MainProduct = () => (
    <Container className="container-main-product">
        <Product />
        <Product />
        <Product />
    </Container>
)

export default MainProduct;