import React from "react";
import './PanelLateral.css';

class PanelLateral extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="panel-lateral">
                <h1 className="panel-lateral-usuario">{this.props.usuario}</h1>
                <h2 className="panel-lateral-contenidos" onClick={() => {this.props.pantalla("Perfil")}}>Perfil</h2>
                <h2 className="panel-lateral-contenidos" onClick={() => {this.props.pantalla("MisObjetos")}}>Mis Objetos</h2>
                <h2 className="panel-lateral-contenidos" onClick={() => {this.props.pantalla("Buscar")}}>Buscar</h2>
                <h2 className="panel-lateral-contenidos" onClick={() => {this.props.pantalla("Usuarios")}}>Usuarios</h2>
            </div>
        );
    }
}

export default PanelLateral;