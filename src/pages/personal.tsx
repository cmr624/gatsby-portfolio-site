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
            <Container>
                <h2 style={{fontFamily:"Avenir", textAlign:'center'}}>Projects Currently in Development!</h2>
            </Container>
            <CardDeck style={{padding:'15px'}}>
                <ProjectCard 
                    title="Phaser Typescript Library and Game Template"
                    blurb="An open source library of gameplay scripts and patterns used in Phaser 3, written in Typescript and ES6. Library included as a submodule in Webpack and Typescript game template." 
                    imageName="phaser-webpack.png"
                    mutedText="Currently in development."
                    cardLink={{displayName:"Repository", href:"https://github.com/cmr624/cm-phaser-library"}}
                />
                <ProjectCard 
                    title="whattup"
                    blurb="whattup"
                    imageName = "youup.png"
                    mutedText="Currently in development."
                />
                <ProjectCard 
                    title="whattup"
                    blurb="whattup"
                    imageName="spacepirate.png"
                    mutedText="Currently in development."
                />
            </CardDeck>
            <Container>
                <h2 style={{fontFamily:"Avenir", textAlign:'center', paddingTop:"20px"}}>Personal Projects Gallery Coming Soon!</h2>
                <p style={{fontFamily:"Avenir", textAlign:'center'}}>While I work on building the gallery component, please check out my itch.io page <a href="https://cmr624.itch.io/">here</a>, where many of the games are playable, and my GitHub profile <a href="https://github.com/cmr624">here</a> for additional projects.</p>
            </Container>
        </Layout>
            
        
    );
}

export default Personal;
