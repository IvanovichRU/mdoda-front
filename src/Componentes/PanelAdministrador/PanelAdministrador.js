import React from "react";
import './PanelAdministrador.css'
import PanelLateral from "../PanelLateral/PanelLateral";
import CuerpoBusqueda from "../CuerpoBusqueda/CuerpoBusqueda";

class PanelAdministrador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: this.props.usuario
        }
    }

    render() {
        return (
            <div className="panelUsuario">
                <PanelLateral usuario={this.state.usuario.nombre} />
                <CuerpoBusqueda />
            </div>
        )
    }
}

export default PanelAdministrador;