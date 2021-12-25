import React from "react";
import './BuscadorObjetos.css';
import iconoBuscar from './../../buscar.svg';
import iconoAgregar from './../../Iconos/Agregar.svg';
import axios from 'axios';
import { CookiesProvider } from "react-cookie";
import EntradaTexto from './../EntradaTexto/EntradaTexto'
import CuerpoAgregarObjeto from "../CuerpoAgregarObjeto/CuerpoAgregarObjeto";

class BuscadorObjetos extends React.Component {
    constructor(props) {
        super(props);

        this.pantallaAgregarOA = this.pantallaAgregarOA.bind(this);
        this.busqueda = React.createRef();
    }

    renderizarBoton() {
        if (this.props.usuario.tipo === 'administrador' || this.props.usuario.tipo === 'maestro') {
            return <div onClick={this.props.funcionCambiarPantalla} className="boton-agregar"><p className="texto-agregar-boton">Agregar Objetos de Aprendizaje</p> <img src= {iconoAgregar} style={{"width":"15%","margin-right":"5%"}} /> </div>;
        }
        else {
            return;
        }
    }

    pantallaAgregarOA(){
        return <CookiesProvider> <CuerpoAgregarObjeto /> </CookiesProvider>;
    }

    render() {
        return (
            <div className="buscador-objetos-contenedor animacion-flotar-abajo">
                <EntradaTexto ref={this.busqueda} label="Buscar objetos..." width={'80em'} />
                <img src={iconoBuscar} className="buscador-objetos-lupa" onClick={() => {this.props.funcionCargarFilas(this.busqueda.current.entrada.current.value)}}  />
                {this.renderizarBoton()}
            </div>
        )
    }
}

export default BuscadorObjetos;