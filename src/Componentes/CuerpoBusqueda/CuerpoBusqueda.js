import React from "react";
import './CuerpoBusqueda.css';

import BuscadorObjetos from "../BuscadorObjetos/BuscadorObjetos";

class CuerpoBusqueda extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="cuerpo-busqueda-contenedor">
                <BuscadorObjetos />
            </div>
        )
    }
}

export default CuerpoBusqueda;