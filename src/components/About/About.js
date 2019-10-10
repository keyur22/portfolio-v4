import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import profile from './profile.jpg';
import SocialIcon from '../SocialIcon/SocialIcon';

const About = () => {
    return (
        <Container className="mt-2 mt-md-5 mb-2 centerContainer">
            <div className="bg-dark p-3 p-md-4 border rounded border-dark">
                <Row>
                    <Col xs={12}>
                        <h2 className="text-center mb-5 text-light">
                            Who am I?
                        </h2>
                    </Col>
                    <Col xs={10} md={3} className="mx-auto text-center">
                        <Image src={profile} className="img-fluid rounded-circle mb-4 mb-md-1 w-75" />
                        <SocialIcon />
                    </Col>
                    <Col xs={12} md={8} className="mx-auto text-light mt-4 mt-md-2">
                        <p style={{ lineHeight: 1.8 }}>
                            Hi, I'm Keyur. I am a Full Stack Developer with 1+ years of experience in HTML5, CSS3, SCSS, Bootstrap, Jquery, PHP, and Wordpress. I also have quite good knowledge in Javascript/ ES6/ OOP ? Async, React, Redux, NodeJS, ExpressJS and PostgreSQL. I am currently seeking to establish a career as a Full Stack Developer.</p>
                        <p style={{ lineHeight: 1.8 }}>
                            When I am not coding, you can find me in the gym. My hobbies are listening to music, reading, watching movies/TV series and playing cricket.
                        </p>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default About;