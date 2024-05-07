import { Component } from 'react'
import Boton from './Boton';

export default class Contador extends Component{
  constructor(props) {
    super(props);
    this.state = { valor: 0 }
  }

  restar() {
    this.setState({valor: this.state.valor - 1});
    // NO => this.state.valor = xxxxx;
  }

  sumar() {
    this.setState({valor: this.state.valor + 1});
  }

  render() {
    return(
      <div className='Contador'>
        <span className='Titulo'>{this.props.children}</span>
        <span className='Valor'>{this.state.valor}</span>
        <div className='>Botonera'>
          <Boton 
            simbolo='-'
            accion={() => this.restar()}
           />
          <Boton 
          simbolo='+'
          accion={() => this.sumar()}
          />
        </div>
      </div>
    )
  }

}