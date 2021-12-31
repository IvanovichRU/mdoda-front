import React from "react"
import "./CuerpoMisObjetos.css"
import BuscadorObjetos from "../BuscadorObjetos/BuscadorObjetos"
import TablaObjetos from "../TablaObjetos/TablaObjetos";
import { CookiesProvider } from "react-cookie";
import CuerpoAgregarObjeto from "../CuerpoAgregarObjeto/CuerpoAgregarObjeto";
import axios from 'axios';

class CuerpoMisObjetos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            objetos: [],
            pantallaTabla: true,
            usuario: this.props.usuario
        }

        this.cambiarPantalla = this.cambiarPantalla.bind(this);
        this.cargarFilas = this.cargarFilas.bind(this);
        this.cargarMisObjetos = this.cargarMisObjetos.bind(this);
    }

    componentDidMount() {
        this.cargarMisObjetos();
    }

    cargarMisObjetos() {
        axios.get('http://localhost:8000/manejador/obtener_objetos', {
            params: {
                usuario_id: this.state.usuario._id
            }
        }).then((respuesta) => {
            this.setState({ objetos: respuesta.data });
        }).catch((razon) => {
            alert(razon);
        });
    }

    cambiarPantalla() {
        this.setState({ pantallaTabla: !this.state.pantallaTabla })
    }

    cargarFilas(cadena_busqueda) {
        axios.get("http://localhost:8000/manejador/buscar_objetos", {
            params: { cadena_de_busqueda: cadena_busqueda }
        }).then((respuesta) => {
            this.setState({ objetos: respuesta.data });
        });
    }

    renderizarPantallaMisObjetos() {
        if (this.state.pantallaTabla) {
            if (this.state.objetos.objetos_encontrados) {
                return (
                    <div className="cuerpo-mis-objetos">
                        <BuscadorObjetos funcionCargarFilas={this.cargarFilas} funcionCambiarPantalla={this.cambiarPantalla} usuario={this.props.usuario} />
                        <TablaObjetos datos={this.state.objetos} encabezados={["Nombre del Objeto de Aprendizaje", "Descripción", "Temas"]} botones />
                    </div>
                )
            }
            else {
                return null;
            }
        }
        else {
            return <CookiesProvider> <CuerpoAgregarObjeto usuario={this.state.usuario} funcionCambiarPantalla={this.cambiarPantalla} /> </CookiesProvider>;
        }
    }

    render() {
        return this.renderizarPantallaMisObjetos();
    }
}

export default CuerpoMisObjetos;