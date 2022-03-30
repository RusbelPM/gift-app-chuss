
import { Component, useEffect } from "react";
import data from '../helpers/data.json';
 function ElementosLista(props) {
     console.log(props.e)
     return(
         <li>
             <a href ={props.e.web}target="_blank
             ">{props.e.name}</a>
         </li>
     )
 }

export default class RenderizadoElementos extends Component{
    constructor(props){
        super(props);
        this.state = {
            session: ["primavera","verano","otoño","invierno"]
        }
    }

    componentDidMount() {
        console.log('ejecuta una vez tyg por primera vez')
        
    }
        
    render(){
        console.log(data)
        return(
            <div>
                <hr/>
        
                <h2>RenderizadoElementos</h2>
                <hr/>
                <h3>Estaciones</h3>
                 {this.state.session.map((e, idx) => (<li key = {idx}>{idx} - {e}</li>))}
                <h3>Frameworks Fronted JavaScript</h3>
                {
                    data.frameworks.map((e)=> <ElementosLista key ={e.id} e={e}/>)
                }
                
            </div>
        )
    }
    }
    