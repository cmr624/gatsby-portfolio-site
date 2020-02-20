import React, { Component, Children, CSSProperties, ReactChildren, PropsWithChildren } from 'react';
import { Link } from 'gatsby';

interface Props {
    to: string;
    children : any;
}

export class NavLink extends Component {
    style : CSSProperties;
    constructor(public props : Props){
        super(props);
        this.style = {
            paddingLeft: '25px',
            paddingRight: '25px',
            color: '#FFFFFF'
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

export default NavLink;
