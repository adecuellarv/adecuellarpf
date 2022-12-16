import React from "react";
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import Card from "./card";
import { getProjectsList } from "./contants";

const Projects = () => {
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
                    {
                        projectsList.map((i, key) => {
                            return (
                                <Col xs={6} key={key}>
                                    <Card
                                        elements={i}
                                    />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
};

export default Projects;