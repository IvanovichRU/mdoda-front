import BarraTitulo from './Componentes/BarraTitulo/BarraTitulo'
import Cuerpo from './Componentes/Cuerpo/Cuerpo';
import Login from './Componentes/Login/Login';
import PanelAdministrador from './Componentes/PanelAdministrador/PanelAdministrador';
import axios from "axios";
import { withCookies, Cookies } from "react-cookie";
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.validarInicioSesion = this.validarInicioSesion.bind(this);
    this.refrescarUsuario = this.refrescarUsuario.bind(this);
    this.cookies = new Cookies;
    this.state = {}
  }

  componentDidMount() {
    let galleta = this.props.cookies.get("token_sesion");
    if (galleta) {
      axios.post('http://localhost:8000/manejador/login', { token_sesion: galleta }, {
        headers: { 'X-CSRFToken': this.props.cookies.get('csrftoken') },
        withCredentials: true
      }).then((response) => {
        let datos = response.data;
        if (datos.Usuario) {
          this.setState({
            usuario: datos.Usuario
          });
        }
        else {
          alert(datos.Mensaje);
        }
      });
    }
  }

  validarInicioSesion(credenciales) {
    axios.post('http://localhost:8000/manejador/login', credenciales,
      {
        headers: { 'X-CSRFToken': this.props.cookies.get('csrftoken') },
        withCredentials: true
      }).then((respuesta) => {
        let datos = respuesta.data;
        if (credenciales.recordar) {
          this.props.cookies.set("token_sesion", datos.token_sesion);
        }
        if (datos.Usuario) {
          this.setState({
            usuario: datos.Usuario
          });
        }
        else {
          alert(datos.Mensaje);
        }

      });
  }

  refrescarUsuario() {
    if (this.state.usuario) {
      axios.get('http://localhost:8000/manejador/perfil', {
        params: {
          usuario_id: this.state.usuario._id,
          tipo: this.state.usuario.tipo
        }
      }).then((respuesta) => {
        this.setState({ usuario: respuesta.data.usuario_actualizado });
        console.log(this.state.usuario)
      }).catch((razon) => {
        alert(razon);
      });
    }
  }

  renderizarPanel() {
    if (this.state.usuario) {
      if (this.state.usuario.tipo === "Administrador") {
        return (
          <PanelAdministrador usuario={this.state.usuario} refrescarUsuario={this.refrescarUsuario} />
        )
      }
    }
    else {
      return (
        <Login alEntregar={this.validarInicioSesion} />
      )
    }
  }

  render() {
    return (
      <div className='contenedor-cuerpo'>
        <BarraTitulo />
        <Cuerpo>
          {this.renderizarPanel()}
        </Cuerpo>
      </div>
    );
  }
}

export default withCookies(App);
