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
                    title="Phaser Typescript Library and Game Template"
                    blurb="An open source library of gameplay and accessibility features in Phaser and TS." 
                    imageName="phaser-webpack.png"
                    mutedText=""
                    cardLink={{displayName:"Repository", href:"https://github.com/cmr624/cm-phaser-library"}}
                />
                <ProjectCard 
                    title="Three Letters Puzzle Game"
                    blurb="A small puzzle game about putting three words together! Get seven random letters, and see how they fit."
                    imageName="three-letters.png"
                    mutedText=""
                />
                <ProjectCard 
                    title="CatLikeCoding - Unity Hex Map Tutorial"
                    blurb="An in depth tutorial series on a Hex Map in Unity3D by Catlike Coding that I am following along and implementing."
                    imageName = "hex-tutorial.png"
                    mutedText=""
                    cardLink={{displayName : "Repository", href:"https://github.com/cmr624/unity-hex"}}
                    style={{marginBottom:"30px"}}
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
