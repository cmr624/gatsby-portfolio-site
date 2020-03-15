import React, { CSSProperties } from 'react';
import {Container} from 'react-bootstrap';



const titleStyle :CSSProperties= {
    textAlign:'center',
    fontFamily:'Avenir',
    font:"Avenir",
    color:"#000000",
    paddingTop:"20px",
    paddingBottom:"10px",
    maxWidth:"560px"
}

const h1Style : CSSProperties = {
    fontSize:'54px'
}

interface CenteredTitleProps {
    h1Content : string
    pContent : string;
}

const CenteredTitle = (props : CenteredTitleProps) => {
    return(
        <Container className="title" style={titleStyle}>
            <h1 style={h1Style}>{props.h1Content}</h1>
            <p>{props.pContent}</p>
        </Container>
        );
}

export default CenteredTitle;
