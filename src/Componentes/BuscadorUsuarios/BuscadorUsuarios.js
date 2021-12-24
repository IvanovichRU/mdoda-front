import React from "react"
import "../BuscadorObjetos/BuscadorObjetos.css"
import iconoBuscar from './../../buscar.svg';

import EntradaTexto from './../EntradaTexto/EntradaTexto'

class BuscadorUsuarios extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="buscador-objetos-contenedor animacion-flotar-abajo">
                <EntradaTexto label="Buscar usuarios..." width={'80em'} />
                <img src={iconoBuscar} className="buscador-objetos-lupa" />
            </div>
        )
    }
}

export default BuscadorUsuarios;