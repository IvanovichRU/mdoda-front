import React from "react";
import './BuscadorObjetos.css';
import iconoBuscar from './../../buscar.svg';
import iconoAgregar from './../../Iconos/Agregar.svg';
import axios from 'axios';

import EntradaTexto from './../EntradaTexto/EntradaTexto'

class BuscadorObjetos extends React.Component {
    constructor(props) {
        super(props);

        this.buscarObjetos = this.buscarObjetos.bind(this);

        this.busqueda = React.createRef();
    }

    renderizarBoton() {
        if (this.props.usuario.tipo === 'administrador' || this.props.usuario.tipo === 'maestro') {
            return <div className="boton-agregar"><p className="texto-agregar-boton">Agregar Objetos de Aprendizaje</p> <img src= {iconoAgregar} style={{"width":"15%","margin-right":"5%"}} /> </div>;
        }
        else {
            return;
        }
    }

    buscarObjetos() {
        axios.get('http://localhost:8000/manejador/buscar_objetos', {
            params: { 'cadena_de_busqueda': this.busqueda.current.entrada.current.value }
        }).then((response) => {
            let objetos = [];
            for (let objeto of response.data.objetos_encontrados) {
                objetos.push(<h2 style={{'color': 'black'}}>{objeto.nombre} - {objeto.descripcion} - {objeto.temas} </h2>);
            }
            this.props.actualizarObjetos(objetos);
        });
    }

    render() {
        return (
            <div className="buscador-objetos-contenedor animacion-flotar-abajo">
                <EntradaTexto ref={this.busqueda} label="Buscar objetos..." width={'80em'} />
                <img src={iconoBuscar} className="buscador-objetos-lupa" onClick={this.buscarObjetos} />
                {this.renderizarBoton()}
            </div>
        )
    }
}

export default BuscadorObjetos;