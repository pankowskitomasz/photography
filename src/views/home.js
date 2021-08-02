import React,{Component} from "react";
import HomeTop from "../components/home-top";

class Home extends Component{
    render(){
        return(          
            <main className="minh-adj-footer d-flex bg-home align-items-center">    
                <HomeTop/>
            </main>
        );
    }
}

export default Home;