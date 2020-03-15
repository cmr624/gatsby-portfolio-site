import React from 'react';
import { Container, CardDeck, Card } from 'react-bootstrap';
import '../pageStyles/indexStyles.css';
import Layout from '../components/globalComponents/layout';
import ProjectCard from '../components/layoutComponents/projectIndexCard';


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
                    mutedText="Currently in active development."
                    cardLink={{displayName:"Repository", href:"https://github.com/cmr624/cm-phaser-library"}}
                />
                <ProjectCard 
                    title="Portfolio Website at carlos-michael.com"
                    blurb="The site you're on right now! A portfolio website built using Gatsby, React, and GraphQL. This is the 4th (!) time I have rebuilt my website from scratch, and I always use it as a way to learn a new stack. Follow along development with the repository link below!"
                    imageName = "gatsby-stack.png"
                    mutedText="Currently in active development."
                    cardLink={{displayName : "GH Project in Repo", href:"https://github.com/cmr624/gatsby-portfolio-site/projects/1"}}
                    // style={{maxHeight:'200px'}}
                />
                <ProjectCard 
                    title="Three Letters Puzzle Game"
                    blurb="A small puzzle game about putting three words together! Get seven random letters, and see how they fit. Each word ends with the letter that the next word begins with! Prototype in Phaser 3 and Typescript, looking to port to Unity!"
                    imageName="three-letters.png"
                    mutedText="Currently in active development."
                />
            </CardDeck>
        </Layout>
            
        
    );
}

export default Personal;
