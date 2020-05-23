import React, {Component} from 'react';
import AboutNav from './aboutnav';
import {   Container, Row, Col } from 'react-bootstrap' ;


class About extends Component{
    render(){
        return(
            <div className="main-report-card-about">
                    <AboutNav/>
                <Container className="div-shadding-light-grey">
                    <div className="text-large-bold">Frequenty asked Questions</div>
                    <div>
                    <Container>
                        <Row className="text-small-bold">
                            <Col sm={1}>1. </Col>
                            <Col sm={11}>How Can I predict my businesses Sales and Purchase? </Col>
                        </Row>
                        <Row>
                            <Col sm={1}> </Col>
                            <Col sm={11}>
                            <div>
                                <div> - Download the data capture Excel Here</div>
                                <div> - Porpulate your sales and purchases data for the month</div>
                                <div> - Upload the excel on the tabiri platform</div>
                                <div> - Checkout the Predictions</div>
                            </div>   
                            </Col>
                        </Row>
                    </Container>

                    </div>

                    <div></div>
                    <div>Architecture</div>  
                </Container>
     
            </div>
        )
    }
}
export default About;