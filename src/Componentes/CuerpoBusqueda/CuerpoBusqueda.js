import React from "react";
import './CuerpoBusqueda.css';

import BuscadorObjetos from "../BuscadorObjetos/BuscadorObjetos";
import TablaObjetos from "../TablaObjetos/TablaObjetos";

class CuerpoBusqueda extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'objetos': []
        }
        this.actualizarObjetos = this.actualizarObjetos.bind(this);
    }

    actualizarObjetos(objetos) {
        this.setState({objetos: objetos});
    }

    render() {
        return (
            <div className="cuerpo-busqueda-contenedor">
                <BuscadorObjetos usuario={this.props.usuario} />
                <TablaObjetos datos={this.state.objetos} encabezados={["Nombre del Objeto de Aprendizaje", "Descripción", "Temas"]} />
            </div>
        )
    }
}

export default CuerpoBusqueda;