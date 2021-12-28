import React from "react";
import './PanelAdministrador.css'
import PanelLateral from "../PanelLateral/PanelLateral";
import CuerpoBusqueda from "../CuerpoBusqueda/CuerpoBusqueda";
import CuerpoUsuarios from "../CuerpoUsuarios/CuerpoUsuarios";
import CuerpoMisObjetos from "../CuerpoMisObjetos/CuerpoMisObjetos";
import CuerpoPerfil from "../CuerpoPerfil/CuerpoPerfil";


class PanelAdministrador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: this.props.usuario,
            pantalla:"Perfil"
        }
        this.cargarPantalla = this.cargarPantalla.bind(this);
        this.cambiarPantalla = this.cambiarPantalla.bind(this);
    }

    cargarPantalla(){
        if(this.state.pantalla === "Buscar"){
            return <CuerpoBusqueda usuario={this.props.usuario} />;
        }
        else if(this.state.pantalla === "Perfil"){
            return <CuerpoPerfil funcion={this.cambiarPantalla} usuario={this.state.usuario} />;
        }
        else if(this.state.pantalla === "MisObjetos"){
            return <CuerpoMisObjetos usuario={this.state.usuario} />;
        }
        else if(this.state.pantalla === "Usuarios"){
            return <CuerpoUsuarios usuario={this.state.usuario} />;
        }
        else {
            return <h1>Error</h1>;
        }
    }
    cambiarPantalla(pantalla){
        this.setState({pantalla:pantalla})
    }

    render() {
        return (
            <div className="panelUsuario">
                <PanelLateral usuario={this.state.usuario} pantalla={this.cambiarPantalla} />
                {this.cargarPantalla()}
            </div>
        )
    }
}

export default PanelAdministrador;