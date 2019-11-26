import React, { useEffect } from 'react';
import './updates-detail.css';
import { Row, Col } from 'react-bootstrap';
import news_detail_logo from '../../../images/news_detail_logo.svg';
import PopUp from './PopUp';
import product_video from '../../../images/product_video.svg';
import news_chart from '../../../images/news_chart.svg';


const NewsDetail = (props) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        // return document.body.style.overflow = 'auto';
    }, [])

    return (
        <PopUp close={props.close}>
            <Row className="updates-detail__content__title">
                <Col xs={2}>
                    <img src={news_detail_logo} alt="" />
                </Col>
                <Col>
                    <h2 className="updates-detail__content__title__heading">Zafira News</h2>
                    <p className="updates-detail__content__title__text">Here is the latest news of Zafira project. Stay in touch.</p>
                </Col>
            </Row>
            <hr className="updates-detail__content__line"></hr>
            <Row>
                <span className="circle"></span>
                <h3 className="updates-detail__content__list _heading">Lorem ipsum dolor sit amet</h3>
                <p>11/3/2019</p>
            </Row>
            <Row>
                <img src={product_video} alt="" />
            </Row>
            <Row>
                <p className="updates-detail__content__list">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ut arcu aliquam suspendisse enim commodo. Nullam dictum adipiscing elementum, gravida diam. Aliquet aliquam vestibulum, elementum ac fringilla cursus et lacus ipsum. Nullam risus laoreet bibendum consectetur nec erat. <br /><br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ut arcu aliquam suspendisse enim commodo. Nullam dictum adipiscing elementum, gravida diam. Aliquet aliquam vestibulum, elementum ac fringilla cursus et lacus ipsum. Nullam risus laoreet bibendum consectetur nec erat.
                    </p>
            </Row>
            <hr className="updates-detail__content__line-short"></hr>
            <Row>
                <h3 className="updates-detail__content__list _heading">Lorem ipsum dolor sit amet</h3>
                <p>09/3/2019</p>
            </Row>
            <Row>
                <img src={news_chart} alt="" />
            </Row>
            <Row>
                <p className="updates-detail__content__list">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ut arcu aliquam suspendisse enim commodo. Nullam dictum adipiscing elementum, gravida diam. Aliquet aliquam vestibulum, elementum ac fringilla cursus et lacus ipsum. Nullam risus laoreet bibendum consectetur nec erat. <br /><br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ut arcu aliquam suspendisse enim commodo. Nullam dictum adipiscing elementum, gravida diam. Aliquet aliquam vestibulum, elementum ac fringilla cursus et lacus ipsum. Nullam risus laoreet bibendum consectetur nec erat.
                </p>
            </Row>
        </PopUp>
    )
}

export default NewsDetail;