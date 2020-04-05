import React from 'react';
import { Container, CardDeck, Card } from 'react-bootstrap';
import '../pageStyles/indexStyles.css';
import Layout from '../components/globalComponents/layout';
import ProjectCard from '../components/layoutComponents/projectIndexCard';
import PersonalPageQuery from '../components/query/personalPageQuery';

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
                    title="CatLikeCoding - Unity Hex Map Tutorial"
                    blurb="An in depth tutorial series on a Hex Map in Unity3D by that I am following along and implementing."
                    imageName = "hex-tutorial.png"
                    mutedText="Currently in active development."
                    cardLink={{displayName : "Repository", href:"https://github.com/cmr624/unity-hex"}}
                    style={{marginBottom:"30px"}}
                />
                <ProjectCard 
                    title="Three Letters Puzzle Game"
                    blurb="A small puzzle game about putting three words together! Get seven random letters, and see how they fit. Each word ends with the letter that the next word begins with! Prototype in Phaser 3 and Typescript, looking to port to Unity!"
                    imageName="three-letters.png"
                    mutedText="Currently in active development."
                />
                <ProjectCard 
                    title="Phaser Typescript Library and Game Template"
                    blurb="An open source library of gameplay scripts and patterns used in Phaser 3, written in Typescript and ES6. Library included as a submodule in Webpack and Typescript game template." 
                    imageName="phaser-webpack.png"
                    mutedText="In backlog, may come back to it with Phaser 4."
                    cardLink={{displayName:"Repository", href:"https://github.com/cmr624/cm-phaser-library"}}
                />
            </CardDeck>
            <Container>
                <h1 style={{textAlign:"center"}}>Past Projects</h1>
                <PersonalPageQuery/>
            </Container>
        </Layout>
            
        
    );
}

export default Personal;
