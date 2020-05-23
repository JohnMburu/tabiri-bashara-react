import React, {Component} from 'react';
import { Card, Container, Row, Col, Table  } from 'react-bootstrap' ;

class Prediction extends Component{
    render(){
        return(
            <div className="main-report-card-div">
                <Container>
                <Row>
                    <Col>
                    <div className="card-holder">
                        <Card>
                        <Card.Body>
                            <Card.Title>Sales Analysis</Card.Title>
                            <Card.Text>
                            Sales Analysis Prediction Analysis 
                            Sales Analysis Prediction Analysis 
                            Sales Analysis Prediction Analysis 
                            Sales Analysis Prediction Analysis 
                            Sales Analysis Prediction Analysis 
                            Sales Analysis Prediction Analysis 
                            Sales Analysis Prediction Analysis 
                            Sales Analysis Prediction Analysis 
                            Sales Analysis Prediction Analysis 
                            Sales Analysis Prediction Analysis  

                            </Card.Text>
                            <div>
                                <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                    <th>Day</th>
                                    <th>Prediction</th>
                                    <th>Confidence</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>Day 1</td>
                                    <td>15</td>
                                    <td>85%</td>
                                    </tr>
                                    <tr>
                                    <td>Day 2</td>
                                    <td>16</td>
                                    <td>84%</td>
                                    </tr>
                                </tbody>
                                </Table>
                            </div>


                        </Card.Body>
                         </Card>                   
                        </div>
                    </Col>
                    <Col>
                        <div className="card-holder">
                        <Card >
                        <Card.Body>
                            <Card.Title>Purchases Analysis</Card.Title>
                            <Card.Text>
                            Sales Analysis Prediction Analysis 
                            Sales Analysis Prediction Analysis 
                            Sales Analysis Prediction Analysis 
                            Sales Analysis Prediction Analysis 
                            Sales Analysis Prediction Analysis 
                            Sales Analysis Prediction Analysis 
                            Sales Analysis Prediction Analysis 
                            Sales Analysis Prediction Analysis 
                            Sales Analysis Prediction Analysis 
                            Sales Analysis Prediction Analysis  
                            </Card.Text>
                            <div>
                                <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                    <th>Day</th>
                                    <th>Prediction</th>
                                    <th>Confidence</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>Day 1</td>
                                    <td>10</td>
                                    <td>90%</td>
                                    </tr>
                                    <tr>
                                    <td>Day 2</td>
                                    <td>13</td>
                                    <td>88%</td>
                                    </tr>
                                </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                        </Card>                   
                        </div>
                    </Col>
                </Row>
                
                </Container>
            </div>
        )
    }
}
export default Prediction;