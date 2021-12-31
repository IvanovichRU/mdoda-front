import React from "react";
import './BuscadorObjetos.css';
import iconoBuscar from './../../buscar.svg';
import iconoAgregar from './../../Iconos/Agregar.svg';
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
        if (this.props.usuario.tipo === 'Administrador' || this.props.usuario.tipo === 'Maestro') {
            return <div onClick={this.props.funcionCambiarPantalla} className="boton-agregar">{window.innerWidth > 768 ? <p className="texto-agregar-boton">Agregar Objetos de Aprendizaje</p> : null} <img src= {iconoAgregar} height={'30px'} /> </div>;
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
                <EntradaTexto width={"25em"} funcionBuscar={() => {this.props.funcionCargarFilas(this.busqueda.current.entrada.current.value)}} ref={this.busqueda} label="Buscar objetos..." />
                <img src={iconoBuscar} className="buscador-objetos-lupa" onClick={() => {this.props.funcionCargarFilas(this.busqueda.current.entrada.current.value)}}  />
                {this.renderizarBoton()}
            </div>
        )
    }
}

export default BuscadorObjetos;