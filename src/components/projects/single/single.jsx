import React, { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { t } from "i18next";

let timer, count = 0;
const Single = ({ classes, item, setOpenSingle }) => {
    const [imgSlide, setImageSlide] = useState(item.gallery[0]);

    useEffect(() => {
        timer = setInterval(() => {
            if (count < item.gallery.length - 1) {
                count++;
            } else {
                count = 0;
            }
            setImageSlide(item.gallery[count]);
        }, 4000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (

        <div className={classes.single} >
            <a
                onClick={() => setOpenSingle(false)}
                style={{
                    color: '#fff',
                    cursor: 'pointer',
                    fontSize: 30
                }}
            ><FontAwesomeIcon icon={faArrowAltCircleLeft} /></a>
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={5} lg={5}>
                        <h1 className={classes.adecuellar}>{item.title}</h1>
                        <p className={classes.softdev}>{item.description}</p>
                        <div style={{marginBottom: 40}}>
                            {item.link &&
                                <a className={classes.link} href={item.link} target="_blank">{t('common.buttons.link')}</a>
                            }
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={7} lg={7}>
                        <img
                            src={imgSlide}
                            style={{ width: '100%' }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Single;