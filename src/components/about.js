import React, {Component} from 'react';
import AboutNav from './aboutnav';
import {   Container } from 'react-bootstrap' ;


class About extends Component{
    render(){
        return(
            <div>
                    <AboutNav/>
                <Container className="div-shadding-light-grey">
                    <div>Downloads</div>
                    <div>Installing Tabiri Localy</div>
                    <div>Architecture</div>  
                </Container>
     
            </div>
        )
    }
}
export default About;