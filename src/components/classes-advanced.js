import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class ClassesAdvanced extends Component{
    render(){
        return(        
            <Container fluid className={"p-0 minh-50vh d-flex align-items-center py-3 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 text-dark">
                    <Col xs={12} md={6} className="text-center text-md-start p-4 d-flex align-items-center">
                        <div className="px-4">
                            <h2 className="mb-3 mt-5 font-logo">
                                Classes for Advanced
                            </h2>
                            <p className="lead">
                                This course is for aspiring commercial photographers or assistants 
                                who are hoping to develop their skills and knowledge in new media. 
                                This involves exploring still and moving image photography. You'll 
                                get to tackle topics on filmmaking as well as the use of CGI, 
                                animation, and more. It will also help you learn how to create 
                                winning commercial yet personal and individualized work for clients. 
                                All of this will be useful if you're pursuing advertising, fashion, 
                                or editorial photography.
                            </p>
                            <p className="lead">
                                Based on certain elements of the photography courses at University of the Arts, 
                                these lessons allow you to learn from expert academics, as well as leading 
                                commercial photographers like Andy Earl and Tim Flach.          
                            </p>
                        </div>
                    </Col>
                    <Col xs={6} className="text-center mx-auto d-flex align-items-center">
                        <img alt="about"
                            className="img-fluid w-75 mx-auto"
                            src="img/classes/classes-advanced.png"/>
                    </Col>
                </Row>
            </Container>      
        );
    }
}

export default ClassesAdvanced;