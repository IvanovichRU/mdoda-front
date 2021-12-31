import React from "react";
import '../CuerpoNuevoUsuario/CuerpoNuevoUsuario.css';
import iconoMostrar from '../../Iconos/mostrar.svg';
import iconoOcultar from '../../Iconos/ocultar.svg';
import axios from "axios";
import { withCookies } from "react-cookie";

class CuerpoNuevoUsuario extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mostrarContraseña: false
        }

        this.mostrarPass = this.mostrarPass.bind(this);
        this.crearNuevoUsuario = this.crearNuevoUsuario.bind(this);
    }

    crearNuevoUsuario() {
        axios.post('http://localhost:8000/manejador/nuevo_usuario', {
            nombre: document.getElementById('nombre').value,
            apellidos: document.getElementById('apellidos').value,
            email: document.getElementById('email').value,
            tipo: document.getElementById('tipo').value,
            contraseña: document.getElementById('contraseña').value
        }, {
            headers: { 'X-CSRFToken': this.props.cookies.get('csrftoken') },
            withCredentials: true
        }).then((respuesta) => {
            alert(respuesta.data.Mensaje);
        }).catch((razon) => {
            alert(razon);
        })
    }

    mostrarPass(){
        this.setState({mostrarContraseña: !this.state.mostrarContraseña})
    }

    render(){
        return(
            <div className="contenedor-nuevo-usuario animacion-flotar-abajo">
                <div className="boton-usuario">
                    <h2 className="titulo-agregarU">Agregar nuevo usuario</h2>
                    <button onClick={this.crearNuevoUsuario} className="boton-agregarU">Agregar nuevo Usuario</button>    
                </div>
                <div className="cuerpo-agregar-usuario">
                    <label className="titulos-cuerpo-usuario">Nombre:</label>
                    <input id="nombre" className="in-usuario" placeholder="Nombre de usuario"></input>
                    <label className="titulos-cuerpo-usuario">Apellidos:</label>
                    <input id="apellidos" className="in-usuario" placeholder="Apellidos"></input>
                    <label className="titulos-cuerpo-usuario">Correo electrónico:</label>
                    <input id="email" className="in-usuario" placeholder="Correo electrónico"></input> 
                    <label className="titulos-cuerpo-usuario">Rol de usuario:</label>
                    <select id="tipo" className="in-usuario">
                        <option value={"Administrador"}>Administrador</option>
                        <option value={"Maestro"}>Maestro</option>
                    </select> 
                    <label className="titulos-cuerpo-usuario">Contraseña:</label>
                    <div style={{display:"flex", alignItems:"center", gap: '0.5em'}} >
                        <input id="contraseña" style={{margin:"0"}} type={this.state.mostrarContraseña ? "text" : "password"} className="in-usuario" placeholder="Contraseña"></input>
                        <img src={this.state.mostrarContraseña ? iconoMostrar : iconoOcultar} onClick={this.mostrarPass} />
                    </div>
                </div>
            </div>
        );
    }
}
export default withCookies(CuerpoNuevoUsuario);
