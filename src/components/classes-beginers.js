import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Button from "../../node_modules/react-bootstrap/Button";

class ClassesBeginners extends Component{
    render(){
        let linking;
        if(this.props.backLink!==undefined){
            linking = <Link to={this.props.backLink.path}>
                <Button variant="outline-dark" className="rounded-pill">
                    {this.props.backLink.name}
                </Button>
            </Link>;
        }
        return(        
            <Container fluid className={"p-0 minh-50vh d-flex align-items-center py-3 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 text-dark py-5">
                    <Col xs={6} className="text-center mx-auto d-flex align-items-center">
                        <img alt="about"
                            className="img-fluid w-75 mx-auto"
                            src="img/about/about-desc.png"/>
                    </Col>
                    <Col xs={12} md={6} className="text-center text-md-start p-4 d-flex align-items-center">
                        <div>
                            <h2 className="mb-3 mt-5 font-logo">
                                Classes for Beginners
                            </h2>
                            <p className="lead">
                                This photography course is more recognizable as the Top Photoclass. 
                                It started its life on the r/photoclass subreddit and ripened into 30 
                                full-fledged lessons on its own site. You will be in the good hands of 
                                Alex Smith, an adventurer and a photographer himself.
                            </p>
                            <p className="lead">
                                You don't even need to own a DSLR. A smartphone will do the job. Lessons 
                                have assignments that you can submit in the comments. Community feedback 
                                helps but there is no grading here.                         
                            </p>
                            
                            {linking}
                        </div>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default ClassesBeginners;