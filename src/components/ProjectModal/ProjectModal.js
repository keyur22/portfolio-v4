import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ProjectModal = props => {
    const data = props.data;
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <p className="text-center text-uppercase font-weight-bold">
                    {data.name}
                </p>
                <img className="img-fluid" src={data.img} alt="project img"></img>
                <div className="mt-4">
                    {
                        data.description.map((des, i) => {
                            return <p key={i}>{des}</p>
                        })
                    }
                </div>
                <p>
                    <span className="font-weight-bold">Technologies Used: </span>
                    {data.tech}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="dark" href={data.website} target="blank">Demo</Button>
                <Button variant="dark" href={data.github} target="blank">Github</Button>
                <Button variant="danger" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
};

export default ProjectModal;