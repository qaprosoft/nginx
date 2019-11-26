import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './product.css';
import product_img from '../../../images/product_img.svg';
import product_video from '../../../images/product_video.svg';
import prod_1 from '../../../images/prod_1.svg';
import prod_2 from '../../../images/prod_2.svg';
import prod_3 from '../../../images/prod_3.svg';
import prod_4 from '../../../images/prod_4.svg';
import prod_5 from '../../../images/prod_5.svg';


const Product = () => (
    <Row className="product__border">
        <Col>
            <div className="product__content">
                <Row>
                    <Col xs={2}>
                        <img className="product__img" src={product_img} alt="" />
                    </Col>
                    <Col>
                        <h2 className="product__heading">Carina</h2>
                        <p className="product__description">Carina is a Java-based test automation framework that unites all testing layers: Mobile applications (web, native, hybrid), WEB applications, REST services, Databases.</p>
                    </Col>
                </Row>
                <Row className="product__menu">
                    <a className="product__menu-item" href="">About Carina</a>
                    <a className="product__menu-item" href="">BDD framework</a>
                    <a className="product__menu-item" href="">Demo</a>
                    <a className="product__menu-item" href="">Sample iOS</a>
                    <a className="product__menu-item" href="">Sample Android</a>
                </Row>
                <Row className="product__box-text">
                    <p className="product__description">
                        Carina framework is built on top of most popular open-source solutions like Selenium, Appium, TestNG allowing to reduce dependence on specific technology stack. <br /><br />

                        Carina supports all popular browsers (IE, Safari, Chrome, Firefox) and mobile devices (iOS/Android). Special feature for mobile domain: it reuses test automation code between IOS/Android up to 70-80%.<br /><br />

                        As far as our framework is built in Java, it is cross-platform. Tests may be easily executed both on Unix or Windows OS. All you need is JDK 8 installed.

                        Framework supports different types of databases - both relational and nonrelational (MySQL, SQL Server, Oracle, PostgreSQL), providing amazing experience of DAO layer implementation using MyBatis ORM framework.

                        API testing is based on Freemarker template engine. It enables great flexibility in generating REST requests and responses are dynamically changed by incoming arguments.
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