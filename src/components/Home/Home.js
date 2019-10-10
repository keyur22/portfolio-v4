import React from 'react';
import { Container, Row, Col, Image, Jumbotron } from 'react-bootstrap';
import profile from './avatar-1.png';
import './Home.css';
import SocialIcon from '../SocialIcon/SocialIcon';

const skills = ['HTML / CSS', 'Bootstrap / SCSS', 'JavaScript', 'React', 'NodeJS', 'ExpressJS', 'PostgreSql'];

function Home() {
    let str = skills.join(' | ');
    return (
        <Container className="mt-3 mt-md-5 home-section">
            <Row>
                <Col xs={6} md={2} className="mx-auto">
                    <Image src={profile} className="img-fluid" />
                </Col>
                <Col xs={12} className="mx-auto mt-4 mt-md-5">
                    <Jumbotron fluid className="bg-dark text-light py-4 border border-dark rounded">
                        <Container className="text-center">
                            <h2 className="font-weight-bold mb-4">Full Stack Developer</h2>
                            <hr />
                            <p className="my-4">{str}</p>
                            <SocialIcon />
                        </Container>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;