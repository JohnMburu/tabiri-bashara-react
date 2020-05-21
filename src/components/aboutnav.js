import React, {Component} from 'react';
import { Nav } from 'react-bootstrap' ;


class About extends Component{
    render(){
        return(
            <div>
                <Nav defaultActiveKey="/about" as="ul">
                <Nav.Item as="li">
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="/sectors">SME Sectors</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="/types">SME types</Nav.Link>
                </Nav.Item>
                </Nav>
            </div>
        )
    }
}
export default About;