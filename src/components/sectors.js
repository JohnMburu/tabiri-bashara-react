import React, {Component} from 'react';
import AboutNav from './aboutnav';
import {  Row, Col, Container } from 'react-bootstrap' ;

class Sectors extends Component{
    render(){
        return(
            <div className="main-report-card-sector">
                <Col sm={12}><AboutNav/></Col>
                <Container>

                    <Row className="div-shadding-grey">
                        <Col sm={3}>
                            <div className="sector-list">Energy</div>
                                <div>- Energy Equipments & services</div>
                                <div>- Oil, Gas & Consumable Fuel</div>
                        </Col>
                        <Col sm={3}>
                            <div className="sector-list"> Materials</div>
                                <div>- Chemicals </div>
                                <div>- Construction Materials </div>
                                <div>- Containers & Packaging </div>
                                <div>- Metals & Mining </div>
                                <div>- Paper & Forest Products </div>
                        </Col>
                        <Col sm={3}>
                        <div className="sector-list">Industrials</div>
                                <div>- Capital Goods </div>
                                <div>- Commercial & Professional Services </div>
                                <div>- Transportation </div>
                        </Col>
                        <Col sm={3}>
                        <div className="sector-list">Consumer Discretionary</div>
                                <div>- Automobiles & Components </div>
                                <div>- Consumer Durables & Apparel </div>
                                <div>- Consumer Services </div>
                                <div>- Retailing </div>
                        </Col>
                    </Row>

                    <Row className="div-shadding-light-grey">
                        <Col sm={3}>
                            <div className="sector-list">Consumer Staples</div>
                                <div>- Food & Staples Retailing</div>
                                <div>- Food, Beverage & Tobacco</div>
                                <div>- Household & Personal Products</div>
                        </Col>
                        <Col sm={3}>
                            <div className="sector-list">Health Care</div>
                                <div>- Health Care Equipment & Services </div>
                                <div>- Pharmaceuticals, Biotechnology & Life Sciences </div>
                        </Col>
                        <Col sm={3}>
                        <div className="sector-list">Financials</div>
                                <div>- Banks </div>
                                <div>- Diversified Financials </div>
                                <div>- Insurance </div>
                        </Col>
                        <Col sm={3}>
                        <div className="sector-list">Information Technology</div>
                                <div>- Software & Services </div>
                                <div>- Technology Hardware & Equipment</div>
                                <div>- Semiconductors & Semiconductor Equipment </div>
                        </Col>
                    </Row>

                    <Row className="div-shadding-grey">
                        <Col sm={3}>
                            <div className="sector-list">Communication Services</div>
                                <div>- Telecommunication Services</div>
                                <div>- Media & Entertainment</div>
                        </Col>
                        <Col sm={3}>
                            <div className="sector-list">Utilities</div>
                                <div>- Electric Utilities </div>
                                <div>- Gas Utilities </div>
                                <div>- Multi-Utilities </div>
                                <div>- Water Utilities </div>
                                <div>- Independent Power And Renewable Electricity Producers </div>
                        </Col>
                        <Col sm={3}>
                        <div className="sector-list">Real Estate</div>
                                <div>- Equity Real Estate Investment Trusts (Reits) </div>
                                <div>- Real Estate Management & Development </div>
                        </Col>

                    </Row>

                </Container>

            </div>
        )
    }
}
export default Sectors;