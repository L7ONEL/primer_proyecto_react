import { Component } from 'react'
import Boton from './Boton';

export default class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: this.props.nombre,
      valor: this.props.valor
    };
  }

  // componentDidMount() {
  //   this.setState({
  //     nombre: this.props.nombre,
  //     valor: this.props.valor
  //   });
  // }

  restar() {
    this.setState(prevState => ({ valor: parseInt(prevState.valor) - 1 }));
    // NO => this.state.valor = xxxxx;
  }

  sumar() {
    this.setState(prevState => ({ valor: parseInt(prevState.valor) + 1 }));
  }

  multiplicar() {
    this.setState(prevState => ({ valor: parseInt(prevState.valor) * 2 }));
  }

  dividir() {
    this.setState(prevState => ({ valor: parseInt(prevState.valor) / 2 }));
  }

  render() {
    return(
      <div className='Contador'>
        <span className='Titulo'>{this.props.children}</span>
        <span className='Valor'>{this.state.valor}</span>
        <div className='Botonera'>
          <Boton 
            simbolo='-'
            accion={() => {
              this.restar();
              this.forceUpdate();
            }}
           />
          <Boton 
          simbolo='+'
          accion={() => {
            this.sumar();
            this.forceUpdate();
          }}
          />
          <Boton 
          simbolo='* 2'
          accion={() => {
            this.multiplicar();
            this.forceUpdate();
          }}
          />
          <Boton 
          simbolo='/ 2'
          accion={() => {
            this.dividir();
            this.forceUpdate();
          }}
          />
          <Boton 
          simbolo='X'
          accion={() => this.props.eliminar()}
          />
        </div>
      </div>
    )
  }

}