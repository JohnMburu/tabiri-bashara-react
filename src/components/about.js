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
                    <div>
                        <Row className="text-small-bold">
                            <Col sm={1}>1. </Col>
                            <Col sm={11}>How Can I predict my businesses Sales and Purchase? </Col>
                        </Row>
                        <Row>
                            <Col sm={1}> </Col>
                            <Col sm={11}>
                            <div>
                                <div> - Go to the downloads page and download the excel or csv file </div>
                                <div> - Porpulate your sales and purchases data for the month</div>
                                <div> - Upload the excel on the tabiri platform</div>
                                <div> - Checkout the Predictions</div>
                            </div>   
                            </Col>
                        </Row>
                        <Row className="text-small-bold">
                            <Col sm={1}>2. </Col>
                            <Col sm={11}>Is the data I provide stored? </Col>
                        </Row>
                        <Row>
                            <Col sm={1}> </Col>
                            <Col sm={11}>
                            <div>
                                <div> NO! </div>
                                <div> - We do not save any data after the prediction has been completed!</div>
                            </div>   
                            </Col>
                        </Row>
                    </div>

                    </div>
                </Container>
     
            </div>
        )
    }
}
export default About;