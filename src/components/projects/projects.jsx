import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import Card from "./card";
import Single from "./single";

import { getProjectsList } from "./contants";

const Projects = () => {
    const [openSingle, setOpenSingle] = useState({});
    const { t } = useTranslation();
    const projectsList = getProjectsList(t);
    return (
        <div style={{ marginBottom: 90 }}>
            <Container>
                <Row>
                    <Col xs={12}>
                        <div style={{ textAlign: 'center', margin: 40 }}>
                            <h1 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 800, fontSize: 45 }}>{t('projects.title')}</h1>
                        </div>
                    </Col>
                    {!openSingle?.title &&
                        projectsList.map((i, key) => {
                            return (
                                <Col xs={12} sm={12} md={6} lg={6} key={key} onClick={() => setOpenSingle(i)}>
                                    <Card
                                        elements={i}
                                    />
                                </Col>
                            )
                        })
                    }
                    {
                        openSingle?.title &&

                        <Single 
                            item={openSingle}
                            setOpenSingle={setOpenSingle}
                        />
                    }
                </Row>
            </Container>
        </div>
    )
};

export default Projects;