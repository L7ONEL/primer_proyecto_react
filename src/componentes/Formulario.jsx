import { Component } from "react";
import Boton from "./Boton";

export default class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: ""
        }
    }

    render(){
        return(
            <div className="Formulario">

                <input
                    type="text"
                    placeholder="Nombre" 
                    value={this.state.nombre} 
                    onChange={(e) => {this.setState({nombre:e.target.value})}} 
                />

                <Boton 
                    accion={()=> this.props.guardar(this.state.nombre)} 
                    simbolo="Guardar"
                />
                
            </div>
        )
    }

}
