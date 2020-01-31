import React from 'react';
import './header.css';
import { Container, Row } from 'react-bootstrap';
import qps_logo from '../../images/qps_logo.svg';
import UpdatesDetail from '../MainSection/UpdatesDetail/UpdatesDetail';

import notification_icon from '../../images/notification_icon.svg';


const Header = (props) => {
    return (
        <header className="header">
            <Container>
                <Row className="header-content">
                    <img className="header__logo-qps" src={qps_logo} alt="" />
                    <pre className="header__title">Welcome to <span className="qps"><b>QPS</b>INFRA</span></pre>
                    <div className="header__notification"  >
                        <img 
                            src={notification_icon}
                            onClick={props.openNotifications}
                            alt=""
                        />
                        <span className="badge">2</span>
                    </div>

                </Row>
            </Container>
        </header>
    )
}

export default Header;
