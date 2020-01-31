import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Card from './Card';
import './main-section.css';
import UpdatesDetail from './UpdatesDetail';
import NewsDetail from './UpdatesDetail/NewsDetail';

import jenkins_logo from '../../images/jenkins_logo.svg';
import carina_logo from '../../images/carina_logo.svg';
import fiverr_logo from '../../images/fiverr_logo.svg';
import sonar_logo from '../../images/sonar_logo.svg'; 
import seleniumHub_logo from '../../images/seleniumHub_logo.svg';



const MainSection = () => {

    const [isDetailOpened, setDetailOpened] = useState(false)

    return (
        <Container className="container-main-section">
            <Row className="row">
                <Card
                    name='Carina'
                    logo={carina_logo}
                />
                <Card
                    name='Zafira'
                    logo={fiverr_logo}
                />
                <Card
                    name='Sonar'
                    logo={sonar_logo}
                />
                <Card
                    name='Jenkins'
                    logo={jenkins_logo}
                />
                <Card
                    name='Selenium Hub'
                    logo={seleniumHub_logo}
                />
                <Card
                    name='Carina'
                    logo={carina_logo}
                />
                <Card
                    name='Zafira'
                    logo={fiverr_logo}
                />
                <Card
                    name='Sonar'
                    logo={sonar_logo}
                />
                <Card
                    name='Jenkins'
                    logo={jenkins_logo}
                />
                <Card
                    name='Jenkins'
                    logo={jenkins_logo}
                />
                <Card
                    name='Selenium Hub'
                    logo={seleniumHub_logo}
                />
            </Row>
        </Container>
    )
}

export default MainSection;
