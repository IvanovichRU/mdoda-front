import BarraTitulo from './Componentes/BarraTitulo/BarraTitulo'
import Cuerpo from './Componentes/Cuerpo/Cuerpo';
import Login from './Componentes/Login/Login';
import PanelAdministrador from './Componentes/PanelAdministrador/PanelAdministrador';
import axios from "axios";
import { withCookies } from "react-cookie";
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: null
    }

    this.validarInicioSesion = this.validarInicioSesion.bind(this);
    this.refrescarUsuario = this.refrescarUsuario.bind(this);
    this.iniciarSesionAlumno = this.iniciarSesionAlumno.bind(this);
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

  iniciarSesionAlumno() {
    this.setState({usuario: {
      nombre: 'Alumno',
      apellidos: 'Invitado',
      email: '',
      tipo: 'Alumno',
    }});
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
    if (this.state.usuario && (this.state.usuario.tipo === 'Administrador' || this.state.usuario.tipo === 'Maestro')) {
      axios.get('http://localhost:8000/manejador/perfil', {
        params: {
          usuario_id: this.state.usuario._id,
          tipo: this.state.usuario.tipo
        }
      }).then((respuesta) => {
        this.setState({ usuario: respuesta.data.usuario_actualizado });
        return this.state.usuario;
      }).catch((razon) => {
        alert(razon);
      });
    }
  }

  renderizarPanel() {
    if (this.state.usuario) {
      return (
        <PanelAdministrador usuario={this.state.usuario} refrescarUsuario={this.refrescarUsuario} />
      );
    }
    else {
      return (
        <Login alEntregar={this.validarInicioSesion} sesionAlumno={this.iniciarSesionAlumno} />
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
