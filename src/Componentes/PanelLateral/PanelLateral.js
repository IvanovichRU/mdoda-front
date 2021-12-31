import React from "react";
import './PanelLateral.css';
import imagenUsuario from '../../Iconos/usuario.jpg';

class PanelLateral extends React.Component {
    constructor(props) {
        super(props);
    }

    renderizarPestañas() {
        if (this.props.usuario.tipo === 'Administrador') {
            return (
                <div className="panel-lateral">
                    <img src={imagenUsuario} style={{width: '100px', borderRadius: '100%'}} />
                    <h1 className="panel-lateral-usuario">{this.props.usuario.nombre}</h1>
                    <h2 className="panel-lateral-contenidos" onClick={() => {this.props.pantalla("Perfil")}}>Perfil</h2>
                    <h2 className="panel-lateral-contenidos" onClick={() => {this.props.pantalla("MisObjetos")}}>Mis Objetos</h2>
                    <h2 className="panel-lateral-contenidos" onClick={() => {this.props.pantalla("Buscar")}}>Buscar</h2>
                    <h2 className="panel-lateral-contenidos" onClick={() => {this.props.pantalla("Usuarios")}}>Usuarios</h2>
                </div>
            );
        }
        if (this.props.usuario.tipo === 'Maestro') {
            return (
                <div className="panel-lateral">
                    <h1 className="panel-lateral-usuario">{this.props.usuario.nombre}</h1>
                    <h2 className="panel-lateral-contenidos" onClick={() => {this.props.pantalla("Perfil")}}>Perfil</h2>
                    <h2 className="panel-lateral-contenidos" onClick={() => {this.props.pantalla("MisObjetos")}}>Mis Objetos</h2>
                    <h2 className="panel-lateral-contenidos" onClick={() => {this.props.pantalla("Buscar")}}>Buscar</h2>
                </div>
            );
        }
        return (
            <div className="panel-lateral">
                <h1 className="panel-lateral-usuario">{this.props.usuario.nombre}</h1>
                <h2 className="panel-lateral-contenidos" onClick={() => {this.props.pantalla("Perfil")}}>Perfil</h2>
                <h2 className="panel-lateral-contenidos" onClick={() => {this.props.pantalla("Buscar")}}>Buscar</h2>
            </div>
            );
    }

    render() {
        return this.renderizarPestañas();
    }
}

export default PanelLateral;