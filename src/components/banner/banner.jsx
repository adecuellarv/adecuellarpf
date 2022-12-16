import React from "react";
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import adeimg from "./ade.png";

const Banner = ({ classes }) => {
    const { t, i18n } = useTranslation();
    return (
        <div
            className={classes.header}
        >
            <Container>
                <Row>
                    <Col>

                    </Col>
                    <Col xs={6}>
                        <div className={classes.adediv}>
                            <img
                                src={adeimg}
                                className={classes.adeimg}
                            />
                            <h1 className={classes.adecuellar}>Ade Cuellar</h1>
                            <p className={classes.softdev}>{t('banner.title')}</p>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
                <div className={classes.divlanguageop}>
                    <a
                        onClick={() => i18n.changeLanguage('es')}
                        className={classes.languageop}
                    >es</a>
                    <span style={{ color: '#fff' }}> / </span>
                    <a
                        onClick={() => i18n.changeLanguage('en')}
                        className={classes.languageop}
                    >en</a>
                </div>
            </Container>
        </div>
    );
};

export default Banner;