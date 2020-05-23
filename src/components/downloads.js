import React, {Component} from 'react';
//import AboutNav from './aboutnav';
import {   Table, Container, Card } from 'react-bootstrap' ;


class About extends Component{
    render(){
        return(
            <div className="downloads-div">
                <Container>
                    <Card>
                    <Card.Body>
                            <Card.Title>Download Preformated Data Source</Card.Title>
                            <Card.Text>
                                <div>
                                    Download the Excels or CSV sheet from the Download link Below.
                                </div>
                                <div>
                                    You <strong>MUST</strong> use the specified format when uploading data into the prediction model.
                                </div>
                            </Card.Text>
                            <div>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    <th>Description</th>
                                    <th>Type</th>
                                    <th>Version</th>
                                    <th>Link</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>1</td>
                                    <td>Sales & Purchases Data source</td>
                                    <td>Excel</td>
                                    <th>v0.1</th>
                                    <td><a href="./files/Demand_and_Supply_Data_Capture.xlsx" download>Download </a></td>
                                    </tr>
                                    <tr>
                                    <td>2</td>
                                    <td>Sales & Purchases Data Source</td>
                                    <td>csv</td>
                                    <th>v0.1</th>
                                    <td><a href="./files/Demand_and_Supply_Data_Capture.csv" download>Download </a></td>
                                    </tr>
                                </tbody>
                                </Table> 
                            </div>
                        </Card.Body>
                    </Card>
                </Container> 
            </div>
        )
    }
}
export default About;