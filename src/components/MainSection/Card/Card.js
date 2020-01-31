import React from 'react';
import './card.css';
import { Row, Col } from 'react-bootstrap';
import github from '../../../images/github.svg';
import telegram from '../../../images/telegram.svg';
import web from '../../../images/web.svg';

const Card = (props) => {
    return (
        <Col className="col-card" xs={6} md={3}>
            {/* <div className="card-border" > */}
            <div className="card">
                <Row className="card-top">
                    <Col>
                        <img className="card-top__social" src={github} alt="" />
                        <img className="card-top__social" src={telegram} alt="" />
                        <img className="card-top__social" src={web} alt="" />
                    </Col>
                </Row>
                <Row className="card-bottom">
                    <Col xs={4} >
                        <img className="product-logo" src={props.logo} alt="" />
                    </Col >
                    <Col className="product-box-title">
                        <p className="product-title">{props.name}</p>
                    </Col>
                </Row>
                {/* </div> */}
            </div>
        </Col>
    )
}
export default Card;
