import React from "react"
// import "../BuscadorObjetos/BuscadorObjetos.css"
import "../BuscadorUsuarios/BuscadorUsuarios.css"
import iconoBuscar from './../../buscar.svg';

import EntradaTexto from './../EntradaTexto/EntradaTexto'

class BuscadorUsuarios extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="buscador-objetos-contenedor animacion-flotar-abajo">
                <EntradaTexto label="Buscar usuarios..." width={'25em'} />
                <img src={iconoBuscar} className="buscador-objetos-lupa" />
                <button className="boton-nuevo-usuario"> Nuevo Usuario</button>
            </div>
        )
    }
}

export default BuscadorUsuarios;