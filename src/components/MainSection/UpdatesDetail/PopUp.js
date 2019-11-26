import React from 'react';
import './updates-detail.css';
import { Row, Col } from 'react-bootstrap';

const PopUp = (props) => (
    <div className="updates-detail__wrapper">
        <Col className="updates-detail__content">
            <Row className="updates-detail__content__close">
                <span className="updates-detail__content__close-item" onClick={() => props.close()}>&times;</span>
            </Row>

            <hr className="updates-detail__content__line"></hr>

            {props.children}
        </Col>


    </div>
)

export default PopUp;