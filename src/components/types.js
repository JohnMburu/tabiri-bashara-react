import React, {Component} from 'react';
import AboutNav from './aboutnav';
import {  Row, Col, Container } from 'react-bootstrap' ;

class Types extends Component{
    render(){
        return(
            <div>
                <Col sm={12}><AboutNav/></Col>
                <Container className="main-report-card-type">
                    <Row className="div-shadding-grey"> 
                        <Col sm={6}>
                            <div className="sector-list">Service Business</div>
                                <div>A service type of business provides intangible products (products with no physical form). Service type firms offer professional skills, expertise, advice, and other similar products</div>
                                <div>Examples</div>
                                <div>- salons</div>
                                <div>- repair</div>
                                <div>- shops</div>
                                <div>- schools</div>
                                <div>- accounting firms</div>
                                <div>- law firms</div>
                        </Col>
                        <Col sm={6}>
                            <div className="sector-list"> Merchandising Business</div>
                                <div>This type of business buys products at wholesale price and sells the same at retail price. They are known as "buy and sell" businesses. They make profit by selling the products at prices higher than their purchase costs </div>
                                <div>Examples</div>
                                <div>- grocery stores</div>
                                <div>- convenience stores</div>
                                <div>- distributors</div>
                                <div>- other resellers.</div>
                        </Col>
                    </Row>

                    <Row className="div-shadding-light-grey">
                        <Col sm={6}>
                            <div className="sector-list">Manufacturing Business</div>
                                <div>Merchandising business, a manufacturing business buys products with the intention of using them as materials in making a new product. Thus, there is a transformation of the products purchased</div>
                                <div>A manufacturing business combines raw materials, labor, and overhead costs in its production process. The manufactured goods will then be sold to customers.</div>
                        </Col>
                        <Col sm={6}>
                            <div className="sector-list">Hybrid Business</div>
                                <div>Hybrid businesses are companies that may be classified in more than one type of business. A restaurant, for example, combines ingredients in making a fine meal (manufacturing), sells a cold bottle of wine (merchandising), and fills customer orders (service). </div>
                                
                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}
export default Types;