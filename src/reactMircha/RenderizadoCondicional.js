
import { Component } from "react";


function Login() {
    return(
        <div>
            <h3>login</h3>
        </div>
    );
}
function Logout() {
    return(
        <div>
            <h3>logout</h3>
        </div>
    );
}


export default class RenderizadoCondicional extends Component{
constructor(props){
    super(props);
    this.state = {
        session:false
    }
}
    
render(){
    return(
        <div>
            <hr/>
    
            <h2>RenderizadoComponente</h2>
             {/* operador ternario */}
            {this.state.session? <ol><Login/></ol> :<ol><Logout/></ol>}
            
            
            
        </div>
    )
}
}

