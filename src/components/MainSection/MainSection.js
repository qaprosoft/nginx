import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Card from './Card';
import './main-section.css';
import UpdatesDetail from './UpdatesDetail';
import NewsDetail from './UpdatesDetail/NewsDetail';


const MainSection = () => {

    const [isDetailOpened, setDetailOpened] = useState(false)
    
    return (
        <Container className="container-main-section">
            <Row className="row">
                <Card openDetail={() => setDetailOpened(true)}/>
                <Card openDetail={() => setDetailOpened(true)}/>
                <Card openDetail={() => setDetailOpened(true)}/>
                <Card openDetail={() => setDetailOpened(true)}/>
                <Card openDetail={() => setDetailOpened(true)}/>
                <Card openDetail={() => setDetailOpened(true)}/>
            </Row>
            {isDetailOpened && <UpdatesDetail close={() => setDetailOpened(false)}/>}
        </Container>
    )
}

export default MainSection;
