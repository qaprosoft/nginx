import React from 'react';
import { Container } from 'react-bootstrap';
import Product from './Product';
import './main-product.css';
import jenkins_logo from '../../images/jenkins_logo.svg';
import carina_logo from '../../images/carina_logo.svg';

import fiverr_logo from '../../images/fiverr_logo.svg';
import sonar_logo from '../../images/sonar_logo.svg'; // sonar
import notification_icon from '../../images/notification_icon.svg';



const MainProduct = () => (
    <Container className="container-main-product">
        <Product
            name='Carina'
            logo={carina_logo}
            title='Carina is a Java-based test automation framework
            that unites all testing layers: Mobile applications (web, native, hybrid),
            WEB applications, REST services, Databases.'
            description={<div><p>Carina framework is built on top of most popular open-source solutions like Selenium,
                Appium, TestNG allowing to reduce dependence on specific technology stack.</p>
                <p>Carina supports all popular browsers (IE, Safari, Chrome, Firefox) and mobile devices (iOS/Android).
                Special feature for mobile domain: it reuses test automation code between IOS/Android up to 70-80%.</p>
                <p>As far as our framework is built in Java, it is cross-platform.
                Tests may be easily executed both on Unix or Windows OS. All you need is JDK 8 installed.</p>
                <p>Framework supports different types of databases - both relational and nonrelational
                (MySQL, SQL Server, Oracle, PostgreSQL), providing amazing experience of DAO layer implementation
                using MyBatis ORM framework. API testing is based on Freemarker template engine. 
                It enables great flexibility in generating REST requests
                and responses are dynamically changed by incoming arguments.</p>
        </div>}
        />
        <Product
            name='Zafira'
            logo={fiverr_logo}
            title='Zafira is a central automation reporting system that is built on the top of Java Spring Framework.'
            description={<div><p>Zafira is a central automation reporting system
                that is built on the top of Java Spring Framework.
                It dramatically increases the transparency of test
                automation results and provides better understanding of product quality.
                Qaprosoft team is developing Zafira based on more than 10-years expertise
                in quality assurance and we strongly believe
                that your QA/Dev engineers and managers will love it!</p>
                <p>Zafira was initially designed to track automation progress
                of the tests written using Carina automation framework but you are
                capable to integrate Zafira client into your own automation tool. 
                We are actively developing clients for different languages and frameworks
                but still looking for active community to provide better support.</p></div>}
            
        />
        <Product
            name='Jenkins'
            logo={jenkins_logo} 
        />
    </Container>
)

export default MainProduct;