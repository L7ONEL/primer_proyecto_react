import { Component } from 'react'
import Contador from './componentes/Contador'
import Formulario from './componentes/Formulario'
import './App.css'

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      contadores: []
    }
  }

  guardar(nombre, valor) {

    let nuevosContadores = this.state.contadores;
    nuevosContadores.push({nombre, valor});

    this.setState({contadores: nuevosContadores});

  }

  eliminar(pos) {

    let nuevosContadores = this.state.contadores;
    nuevosContadores.splice(pos, 1);

    this.setState({contadores: nuevosContadores});

  }

  render() {
    return(
      <div className='Contenedor'>

        <Formulario
          guardar = {(nombre, valor) => this.guardar(nombre, valor)}
        />

        <div className='ListaContadores'>
          {this.state.contadores.map((cont, index) => 
            <Contador 
              valor = {cont.valor}
              key = {cont.nombre}
              eliminar = {() => this.eliminar(index)}
            >{cont.nombre}</Contador>
          )}
        </div>

      </div>
    )
  }

}