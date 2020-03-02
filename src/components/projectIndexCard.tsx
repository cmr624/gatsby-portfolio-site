import React from 'react';
import {Card} from 'react-bootstrap';

import './projectIndexCard.css';

interface Props {
    title : string;
    blurb : string;
    imagePath : string;
    mutedText : string;
}

const ProjectCard = (props : Props) => {
    return (
        <Card>
            {/* <Card.Img variant="top" src={props.imagePath} /> */}
            <Card.Body>
                <Card.Title className="title">{props.title}</Card.Title>
            <Card.Text>
                {props.blurb}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">{props.mutedText}</small>
            </Card.Footer>
        </Card>
    );
}

export default ProjectCard;
