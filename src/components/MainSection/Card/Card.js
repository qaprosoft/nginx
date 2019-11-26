import React from 'react';
import './card.css';
import { Row, Col } from 'react-bootstrap';
import github from '../../../images/github.svg';
import telegram from '../../../images/telegram.svg';
import web from '../../../images/web.svg';
import product_logo from '../../../images/product_logo.svg';

const Card = (props) => (
    <Col className="col-card" xs={6} md={3}>
        {/* <div className="card-border" > */}
            <div className="card">
                <Row className="card-top">
                    <Col>
                        <div onClick={() => props.openDetail()} className="card-top__btn-updates" data-count="" >Updates</div>
                    </Col>
                    <Col>
                        <img className="card-top__social" src={github} alt="" />
                        <img className="card-top__social" src={telegram} alt="" />
                        <img className="card-top__social" src={web} alt="" />
                    </Col>
                </Row>
                <Row  className="card-bottom">
                    <Col xs={4} >
                        <img className="product-logo" src={product_logo} alt="" />
                    </Col >
                    <Col className="product-box-title">
                        <p className="product-title">Jenkins</p>
                    </Col>
                </Row>
            {/* </div> */}
        </div>
    </Col>
)

export default Card;