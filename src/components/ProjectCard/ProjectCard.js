import React from 'react';
import { Card, Col } from 'react-bootstrap';
import ProjectModal from '../ProjectModal/ProjectModal';

const ProjectCard = ({ data }) => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <Col xs={12} md={6} xl={4} className="mx-auto d-flex">
            <Card className="border rounded border-dark shadow-lg mb-5" onClick={() => setModalShow(true)}>
                <Card.Img variant="top" src={data.img} />
                <Card.Body>
                    <p className="text-center font-weight-bold text-uppercase">{data.name}</p>
                    <Card.Text>
                        {data.excerpt};
                    </Card.Text>
                </Card.Body>
            </Card>
            <ProjectModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                data={data}
            />
        </Col>
    )
}

export default ProjectCard;