import React, { Component, CSSProperties } from 'react';
import { Link } from 'gatsby';
import {Container} from 'react-bootstrap';

interface Props {
    to: string;
    children : any;
}
//TODO : change from class, doesn't use state
export default class NavLink extends Component {
    style : CSSProperties;
    constructor(public props : Props){
        super(props);
        this.style = {
            paddingLeft: '25px',
            paddingRight: '25px',
            color: '#FFFFFF',
            textAlign : 'right',
            float : "right",
        }
    }
    render() {
        return (
                <Link to={this.props.to} style={this.style}>
                    {this.props.children}
                </Link>
            
        );
    }
}

export class NavLinkCenter extends Component {
    style : CSSProperties;
    constructor(public props : Props){
        super(props);
        this.style = {
            paddingLeft: '80px',
            paddingRight: '80px',
            color: '#FFFFFF',
            // float:'none',
            // margin:'0 auto',
            // display: 'block',
        }
    }
    render() {
        return (
                <Link to={this.props.to} style={this.style} id="centerlink">
                    {this.props.children}
                </Link>
            
        );
    }

}
