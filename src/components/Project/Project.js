import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Project.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import projectDetails from '../../projectDetails/projectDetails';

const Project = () => {
    return (
        <Container className="projects-section pt-5 centerContainer">
            <Row>
                <Col xs={12} className="mx-auto">
                    <h2 className="text-center mb-5 text-light">
                        Some of my projects
                    </h2>
                </Col>
                {
                    projectDetails.map(project => {
                        return <ProjectCard key={project.id} data={project} />
                    })
                }
            </Row>
        </Container>
    );
};

export default Project;