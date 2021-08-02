import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class AboutExt extends Component{
    render(){
        return(        
            <Container fluid className={"about-ext p-0 minh-50vh d-flex align-items-center py-3 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 text-dark">
                    <Col xs={6} className="text-center mx-auto order-2 order-md-1 d-flex align-items-center">
                        <img alt="about"
                            className="img-fluid w-75 mx-auto"
                            src="img/about/about-ext.png"/>
                    </Col>
                    <Col xs={12} md={6} className="text-center text-md-start p-4 d-flex align-items-center order-1 order-md-2">
                        <div>
                            <h2 className="mb-3 mt-5 font-logo">
                                The Concept
                            </h2>
                            <p className="lead">
                                The basic idea behind the genre, is that instead of merely 
                                capturing a realistic rendition of the subject, the photographer 
                                is aiming to produce a more personal - typically more evocative 
                                or atmospheric - impression. One might simplify this, by saying 
                                that fine art photography describes any image taken by a camera 
                                where the intention is aesthetic (that is, a photo whose value 
                                lies primarily in its beauty - see, Aesthetics) rather than 
                                scientific, commercial, or journalistic.                         
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>      
        );
    }
}

export default AboutExt;