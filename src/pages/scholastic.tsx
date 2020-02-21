import React from 'react';

import Layout from "../components/layout"
import { Row, Col, Container } from 'react-bootstrap';

const Scholastic = () => (
  <Layout> 
    <Container>
        <h1>Scholastic</h1>
        <p>Summary. As a game developer at Scholastic, I programmed and designed games paired with magazine articles as a part of the digital package shipped with each magazine.
        Each game was designed around a central skill defined by the editorial team, leading to blah blah blah.
        Our team built HTML + JS games with a stack inherited from a Flash workflow, including splitting code logic between Adobe Animate CC, and vanilla ES5 Javascript with the (!!!a tag) `createjs` library.
        This workflow and dated technology caused our games to have poor frame rates on low end and average machines, lacked meaningful source control to adequately prototype our games, and had little to no error checking, causing bugs to consistently make it into production. 
        I identified these deficiencies and implemented project management, source control, and framework solutions.</p>
    </Container>
    <Row>
        <Col>
            <h3>Problems Identified</h3>
            <ul>
                <li>Frame Rate</li>
                <li>No source control</li>
                <li>No formal project management</li>
                <li>Framework deficiencies</li>
            </ul>
        </Col>
        <Col>
            <h3>Details</h3>
            <ul>
                <li>Games averaged 8-15fps on low-end machines, causing visual synchronization problems along with user experience issues. Identified problems as a lack of batch rendering, raw vector graphic rendering (and re-rendering on each frame) instead of converting the vectors to bitmap data, and a lack of insight into how the draw calls are being called due to the calls being exported and compiled through our AnimateCC (primary IDE).</li>
                <li>Each individual game is built without versioning or source control, meaning any experimental feature or iteration on a prototype involves manually duplicating the project to save a "master" copy.</li>
                <li>No formalized process for building out each individual game or breaking out the systems development into discrete tasks.</li>
                <li>The framework used spreads out programming logic in both the Javascript files and our IDE. This means keeping them in parity requires more overhead and it becomes impossible to modularize shared functionality among different projects. Since every project is developed from scratch, efficiency is lost with the framework as a number of the games share similar functionality, but are implemented differently.</li>
            </ul>
        </Col>
        <Col>
            <h3>Solutions Implemented</h3>
            <ul>
                <li>Identified specific components including vector text and vector "shape" game objects that caused high rendering load, introduced the team to the Canvas debugger, and implemented an alternative workflow using Phaser.</li>
                <li>Wrote a template for a new repository format, including integration with modern development tools, transpiling from ES10+ / Typescript to ES5 with Babel, setting up our proprietary library as a submodule, and GitHub integration for useful project management features.</li>
                <li>Implemented a kanban-style project management board within GitHub projects, with Issues defined as user stories, spikes, and discrete tasks, based on modern agile methodologies.</li>
                <li>Researched various JS game frameworks, and learned about and implemented multiple prototypes in Phaser.JS. As an open source framework, the community and resources are vast and allow for easy help on debugging and learning about the system. Most importantly, the visual design and programming logic are each self contained, as all visual design can be done in visual programs, and are then exported to Phaser as visual objects to be manipulated by Phaser's logic. This decouples visual interfaces with the actual programming, meaning visuals and code are more modular and allow for easy reusability.</li>
            </ul>
        </Col>
    </Row>
    <Row>
        Game Gallery
    </Row>
  </Layout>
)

export default Scholastic;
