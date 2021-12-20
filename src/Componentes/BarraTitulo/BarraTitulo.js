import React from "react";
import logo from '../../itsx.png';
import './BarraTitulo.css';

class barraTitulo extends React.Component {
    render() {
        return (
            <div className="barra-titulo">
                <img src={logo} alt="Logo" width={30}></img>
                <h1>Manejador de Objetos de Aprendizaje</h1>
            </div>
        )
    }
}

export default barraTitulo;