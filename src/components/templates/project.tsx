import React, { Component } from 'react';
import './project.css';
import { StandardProjectData } from '../utils/dataTypes';
import { Container } from 'react-bootstrap';
import Layout from '../globalComponents/layout';
export default (data) => {
    data = data.pageContext.node;
    let meta : StandardProjectData = {...data};
    return (
    <Layout>
        <Container>
            <h1>{meta.name}</h1>
            <h2>{meta.blurb}</h2>
        </Container>
    </Layout>
    )
}