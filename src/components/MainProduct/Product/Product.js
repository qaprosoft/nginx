import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './product.css';
// import product_img from '../../../images/product_img.svg';
import product_video from '../../../images/product_video.svg';
import prod_1 from '../../../images/prod_1.svg';
import prod_2 from '../../../images/prod_2.svg';
import prod_3 from '../../../images/prod_3.svg';
import prod_4 from '../../../images/prod_4.svg';
import prod_5 from '../../../images/prod_5.svg';


const Product = (props) => (
    <Row className="product__border">
        <Col>
            <div className="product__content">
                <Row>
                    <Col xs={2}>
                        <img className="product__img" src={props.logo} alt="" />
                    </Col>
                    <Col>
                        <h2 className="product__heading">{props.name}</h2>
                        <p className="product__description">{props.title}</p>
                    </Col>
                </Row>
                <Row className="product__menu">
                    <a className="product__menu-item" href="">About {props.name}</a>
                    <a className="product__menu-item" href="">BDD framework</a>
                    <a className="product__menu-item" href="">Demo</a>
                    <a className="product__menu-item" href="">Sample iOS</a>
                    <a className="product__menu-item" href="">Sample Android</a>
                </Row>
                <Row className="product__box-text">
                    <p className="product__description">
                        {props.description}
                    </p>
                </Row>
            </div>
        </Col>
        <Col className="media-boder">
            <Row className="product-media">
                <img className="product-media__product-video" src={product_video} alt="" />
            </Row>
            <Row className="product-media">
                <img className="product-media-img" src={prod_1} alt="" />
                <img className="product-media-img" src={prod_2} alt="" />
                <img className="product-media-img" src={prod_3} alt="" />
                <img className="product-media-img" src={prod_4} alt="" />
                <img className="product-media-img" src={prod_5} alt="" />
            </Row>
        </Col>
    </Row>
)

export default Product;
