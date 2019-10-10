import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Skills.css';

const iconNames = ['html5', 'css3', 'javascript', 'bootstrap', 'react', 'nodejs', 'express', 'postgresql', 'jquery', 'php', 'wordpress'];

const Skills = () => {
    return (
        <Container className="pt-5 centerContainer mb-2">
            <div className="bg-dark p-3 p-md-4 border rounded border-dark w-100">
                <Row>
                    <Col xs={12} className="mx-auto">
                        <h2 className="text-center text-light">
                            Technologies I have coded in...
                        </h2>
                    </Col>
                    <Col xs={12} className="mx-auto tech-container mt-5">
                        {
                            iconNames.map((icon, i) => {
                                if (icon === 'express') {
                                    return <i key={i} className={`devicon-${icon}-original-wordmark icon mx-2 my-3`}></i>
                                } else {
                                    return <i key={i} className={`devicon-${icon}-plain icon mx-2 my-3`}></i>
                                }
                            })
                        }
                    </Col>
                </Row>
            </div>
        </Container>
    )
};

export default Skills;