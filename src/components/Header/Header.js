import React from 'react';
import './header.css';
import { Container, Row } from 'react-bootstrap';
import logo_qps from '../../images/logo_qps.svg';

const Header = () => (
    <header className="header">
        <Container>
            <Row className="header-content">
                <img className="header__logo-qps" src={logo_qps} alt="" />
                <pre className="header__title">Welcome to <span className="qps"><b>QPS</b>INFRA</span></pre>
            </Row>
        </Container>
    </header>
)

export default Header;