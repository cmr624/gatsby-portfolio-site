import React, { Component } from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Layout from '../components/layout';

interface Game {
    name : string;
    url : string;
}
const Personal = ({children}) => {
    //{this.state.data.dataJson.games.map((e)=> {<h1>e.name</h1>})}
    // const data = useStaticQuery(graphql`
        
    //     `)
    return (
        <Layout>
            <ul>
            </ul>
        </Layout>
            
        
    );
}

export default Personal;
