import React, { useEffect } from 'react';
import './updates-detail.css';
import { Row, Col } from 'react-bootstrap';
import sonar_logo from '../../../images/sonar_logo.svg';
import PopUp from './PopUp';


const UpdatesDetail = (props) => {

    const allowScroll = () => {
        document.body.style.overflow = 'auto';
    }
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return allowScroll();
    }, [])

    return (
        <PopUp close={props.close}>
            <Row className="updates-detail__content__title">
                <Col xs={2}>
                    <img src={sonar_logo} alt="" />
                </Col>
                <Col>
                    <h2 className="updates-detail__content__title__heading">Sonar Updates</h2>
                    <p className="updates-detail__content__title__text">Here is the latest updates of Zafira project. We’re recomended to update</p>
                </Col>
            </Row>
            <Row>
                <div className="updates-detail__content__button" >Update now</div>
            </Row>

            <hr className="updates-detail__content__line"></hr>

            <Row className="updates-detail__content__list _margin">
                <Col>
                    <h3 className="updates-detail__content__list _heading">Update from 11/3/2019</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ut arcu aliquam suspendisse enim commodo. Nullam dictum adipiscing elementum, gravida diam. Aliquet aliquam vestibulum, elementum ac fringilla cursus et lacus ipsum. Nullam risus laoreet bibendum consectetur nec erat.
                    </p>
                    <p className="updates-detail__content__list _text">What's new?</p>
                    <ul className="updates-detail__content__list-box">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Vitae ut arcu aliquam suspendisse enim commodo.</li>
                        <li>Nullam dictum adipiscing elementum, gravida diam.</li>
                        <li>Aliquet aliquam vestibulum.</li>
                        <li>Elementum ac fringilla cursus et lacus ipsum.</li>
                        <li>Nullam risus laoreet bibendum consectetur nec erat.</li>
                    </ul>
                    <p className="updates-detail__content__list _text">What improved?</p>
                    <ul className="updates-detail__content__list-box">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Vitae ut arcu aliquam suspendisse enim commodo.</li>
                        <li>Nullam dictum adipiscing elementum, gravida diam.</li>
                        <li>Aliquet aliquam vestibulum.</li>
                        <li>Elementum ac fringilla cursus et lacus ipsum.</li>
                        <li>Nullam risus laoreet bibendum consectetur nec erat.</li>
                    </ul>
                    <p className="updates-detail__content__list _text">What’s plan?</p>
                    <ul className="updates-detail__content__list-box">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Vitae ut arcu aliquam suspendisse enim commodo.</li>
                        <li>Nullam dictum adipiscing elementum, gravida diam.</li>
                    </ul>
                </Col>
            </Row>

            <hr className="updates-detail__content__line-short"></hr>

            <Row className="updates-detail__content__list _margin">
                <Col>
                    <h3 className="updates-detail__content__list _heading">Update from 11/3/2019</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ut arcu aliquam suspendisse enim commodo. Nullam dictum adipiscing elementum, gravida diam. Aliquet aliquam vestibulum, elementum ac fringilla cursus et lacus ipsum. Nullam risus laoreet bibendum consectetur nec erat.
                    </p>
                    <p className="updates-detail__content__list _text">What's new?</p>
                    <ul className="updates-detail__content__list-box">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Vitae ut arcu aliquam suspendisse enim commodo.</li>
                        <li>Nullam dictum adipiscing elementum, gravida diam.</li>
                        <li>Aliquet aliquam vestibulum.</li>
                        <li>Elementum ac fringilla cursus et lacus ipsum.</li>
                        <li>Nullam risus laoreet bibendum consectetur nec erat.</li>
                    </ul>
                    <p className="updates-detail__content__list _text">What improved?</p>
                    <ul className="updates-detail__content__list-box">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Vitae ut arcu aliquam suspendisse enim commodo.</li>
                        <li>Nullam dictum adipiscing elementum, gravida diam.</li>
                        <li>Aliquet aliquam vestibulum.</li>
                        <li>Elementum ac fringilla cursus et lacus ipsum.</li>
                        <li>Nullam risus laoreet bibendum consectetur nec erat.</li>
                    </ul>
                    <p className="updates-detail__content__list _text">What’s plan?</p>
                    <ul className="updates-detail__content__list-box">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Vitae ut arcu aliquam suspendisse enim commodo.</li>
                        <li>Nullam dictum adipiscing elementum, gravida diam.</li>
                    </ul>
                </Col>
            </Row>
        </PopUp>
    )
}

export default UpdatesDetail;