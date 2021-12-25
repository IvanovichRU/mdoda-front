import React from "react";
import './CuerpoBusqueda.css';
import { CookiesProvider } from "react-cookie";
import CuerpoAgregarObjeto from "../CuerpoAgregarObjeto/CuerpoAgregarObjeto";
import BuscadorObjetos from "../BuscadorObjetos/BuscadorObjetos";
import TablaObjetos from "../TablaObjetos/TablaObjetos";
import axios from "axios";

class CuerpoBusqueda extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            objetos: [],
            pantallaTabla: true
        }
        this.cambiarPantalla = this.cambiarPantalla.bind(this);
        this.cargarFilas = this.cargarFilas.bind(this);
    }

    cambiarPantalla() {
        this.setState({pantallaTabla: !this.state.pantallaTabla})
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
                    <TablaObjetos datos={this.state.objetos} encabezados={["Nombre del Objeto de Aprendizaje", "Descripción", "Temas"]} />
                </div>
            );
        }
        else{
            return <CookiesProvider> <CuerpoAgregarObjeto funcionCambiarPantalla={this.cambiarPantalla} /> </CookiesProvider>;
        }
    }

    render() {
        return this.renderizarPantallaBusqueda();
    }
}

export default CuerpoBusqueda;