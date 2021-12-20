import BarraTitulo from './Componentes/BarraTitulo/BarraTitulo'
import Cuerpo from './Componentes/Cuerpo/Cuerpo';
import Login from './Componentes/Login/Login';
import Usuario from './Clases/Usuario'
import PanelAdministrador from './Componentes/PanelAdministrador/PanelAdministrador';

import axios from "axios";
import { withCookies } from "react-cookie";
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.validarInicioSesion = this.validarInicioSesion.bind(this);
    this.state = {
      usuario: null
    }
  }

  validarInicioSesion(estadoFormularioLogin) {
    axios.post('http://localhost:8000/manejador/login', {
        email: estadoFormularioLogin.correoElectronico,
        contraseña: estadoFormularioLogin.contraseña,
    },
    {
        headers: {'X-CSRFToken': this.props.cookies.get('csrftoken')},
        withCredentials: true
    }).then((response) => {
        let datos = response.data;
        this.setState({
          usuario: new Usuario(datos.nombre, datos.apellidos, datos.email, datos.tipo, datos.id)
        })
    });
  }

  renderizarPanel() {
    if (this.state.usuario) {
      if (this.state.usuario.tipo == 'administrador') {
        return <PanelAdministrador usuario={this.state.usuario} />;
      }
    }
    else {
      return <Login onSubmit={this.validarInicioSesion}/>
    }
  }

  render() {
    return (
          <div className='contenedor-cuerpo'>
            <BarraTitulo/>
            <Cuerpo>
              {this.renderizarPanel()}
            </Cuerpo>
          </div>
    );
  }
}

export default withCookies(App);
