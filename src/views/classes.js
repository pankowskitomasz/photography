import React,{Component} from "react";
import ClassesBeginners from "../components/classes-beginers";
import ClassesAdvanced from "../components/classes-advanced";

class Classes extends Component{
    render(){
        return(          
            <main className="minh-100vh bg-classes">    
                <ClassesBeginners/>
                <ClassesAdvanced/>
            </main>
        );
    }
}

export default Classes;