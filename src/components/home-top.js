import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class HomeTop extends Component{
    render(){
        return(        
            <Container fluid className={"p-0 d-flex align-items-center py-3 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 text-dark">
                    <Col xs={6} className="text-center mx-auto d-flex align-items-end">
                        <img alt="about"
                            className="img-fluid w-75 mx-auto"
                            src="img/home/home-top.png"/>
                    </Col>
                    <Col xs={12} md={6} className="text-center text-md-start px-4 d-flex align-items-center">
                        <div className="w-75 mx-auto">
                            <h2 className="mb-3 mt-5 display-5 fw-bold">
                                Photography
                            </h2>
                            <p className="lead">
                                We teach people how to become award-winning photographers. But even if 
                                winning awards is not your goal, we will show you how to create photos 
                                that are awesome!                    
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>      
        );
    }
}

export default HomeTop;