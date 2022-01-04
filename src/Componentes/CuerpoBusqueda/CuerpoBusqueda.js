import React from "react";
import './CuerpoBusqueda.css';
import { CookiesProvider } from "react-cookie";
import CuerpoAgregarObjeto from "../CuerpoAgregarObjeto/CuerpoAgregarObjeto";
import BuscadorObjetos from "../BuscadorObjetos/BuscadorObjetos";
import TablaObjetos from "../TablaObjetos/TablaObjetos";
import axios from "axios";
import CuerpoMostrarObjeto from "../CuerpoMostrarObjeto/CuerpoMostrarObjeto";

class CuerpoBusqueda extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            objetos: [],
            pantallaTabla: true,
            usuario: this.props.usuario,
            objetoSeleccionado: null
        }
        this.cambiarPantalla = this.cambiarPantalla.bind(this);
        this.cargarFilas = this.cargarFilas.bind(this);
        this.seleccionarObjeto = this.seleccionarObjeto.bind(this);
    }

    cambiarPantalla() {
        this.setState({pantallaTabla: !this.state.pantallaTabla, objetoSeleccionado: null})
    }

    seleccionarObjeto(idObjeto) {
        axios.get('http://localhost:8000/manejador/obtener_info_objeto', {
            params: {_id: idObjeto}
        }).then((respuesta) => {
            this.setState({pantallaTabla: false, objetoSeleccionado: respuesta.data.Objeto});
        }).catch(razon => {
            alert(razon);
        });
    }

    cargarFilas(cadena_busqueda) {
        axios.get("http://localhost:8000/manejador/buscar_objetos", {
            params: {cadena_de_busqueda: cadena_busqueda}
        } ).then((respuesta) => {
            this.setState({objetos: respuesta.data});
        });
    }

    renderizarPantallaBusqueda(){
        if(this.state.pantallaTabla){
            return (
                <div className="cuerpo-busqueda-contenedor">
                    <BuscadorObjetos funcionCargarFilas={this.cargarFilas} funcionCambiarPantalla={this.cambiarPantalla} usuario={this.props.usuario} />
                    <TablaObjetos datos={this.state.objetos} funcionSeleccionar={this.seleccionarObjeto} encabezados={["Nombre del Objeto de Aprendizaje", "Descripción", "Temas"]} />
                </div>
            );
        }
        else if (this.state.pantallaTabla == false && this.state.objetoSeleccionado != null) {
            return (
                <CuerpoMostrarObjeto objeto={this.state.objetoSeleccionado} funcionCambiarPantalla={this.cambiarPantalla} />
            );
        }
        else{
            return <CookiesProvider> <CuerpoAgregarObjeto usuario = {this.state.usuario} funcionCambiarPantalla={this.cambiarPantalla} /> </CookiesProvider>;
        }
    }

    render() {
        return this.renderizarPantallaBusqueda();
    }
}

export default CuerpoBusqueda;