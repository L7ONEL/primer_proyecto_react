import { Component } from "react";
import Boton from "./Boton";

export default class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            valor: "",
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

                <br />

                <input 
                    type="number" 
                    placeholder="Valor inicial"
                    value={this.state.valor}
                    onChange={(e) => {this.setState({valor:e.target.value})}}
                />

                <Boton 
                    accion={()=> this.props.guardar(this.state.nombre, this.state.valor)} 
                    simbolo="Guardar"
                />
                
            </div>
        )
    }

}
