import React from "react";
import './BuscadorObjetos.css';
import iconoBuscar from './../../buscar.svg';

import EntradaTexto from './../EntradaTexto/EntradaTexto'

class BuscadorObjetos extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="buscador-objetos-contenedor">
                <EntradaTexto label="Buscar objetos..." width={'80em'} />
                <img src={iconoBuscar} className="buscador-objetos-lupa" />
            </div>
        )
    }
}

export default BuscadorObjetos;