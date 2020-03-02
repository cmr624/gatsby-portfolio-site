import React, { Component } from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Layout from '../components/layout';
import { Container, CardDeck, Card } from 'react-bootstrap';
import '../pageStyles/indexStyles.css';
import ProjectCard from '../components/projectIndexCard';

const Personal = ({children}) => {
    return (
        <Layout>
            <Container className="title">
                <h1>Personal Projects</h1>
                <p>Here are a list of projects I am currently working on as personal projects, helping me to continue to learn and develop my programming, web development, and project management skills. Feel free to give any feedback, submit issues, pull requests, or code contributions on any open source projects!</p>
            </Container>
            <CardDeck style={{padding:'15px'}}>
                <ProjectCard 
                    title="Phaser Typescript Library"
                    blurb="This library is a ..."
                    imagePath="path/"
                    mutedText="Currently in development."
                />
                <ProjectCard 
                    title="whattup"
                    blurb="whattup"
                    imagePath="path/"
                    mutedText="Currently in development."
                />
                <ProjectCard 
                    title="whattup"
                    blurb="whattup"
                    imagePath="path/"
                    mutedText="Currently in development."
                />
            </CardDeck>
        </Layout>
            
        
    );
}

export default Personal;
