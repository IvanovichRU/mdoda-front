import React from "react"
import "./CuerpoMisObjetos.css"
import BuscadorObjetos from "../BuscadorObjetos/BuscadorObjetos"
import TablaObjetos from "../TablaObjetos/TablaObjetos";
import { CookiesProvider } from "react-cookie";
import CuerpoAgregarObjeto from "../CuerpoAgregarObjeto/CuerpoAgregarObjeto";
import CuerpoMostrarObjeto from "../CuerpoMostrarObjeto/CuerpoMostrarObjeto";
import axios from 'axios';

class CuerpoMisObjetos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            objetos: [],
            pantallaTabla: true,
            usuario: null,
            objetoSeleccionado: null
        }

        this.cambiarPantalla = this.cambiarPantalla.bind(this);
        this.cargarFilas = this.cargarFilas.bind(this);
        this.cargarMisObjetos = this.cargarMisObjetos.bind(this);
        this.seleccionarObjeto = this.seleccionarObjeto.bind(this);
    }

    componentDidMount() {
        this.setState({usuario: this.props.usuario});
        this.cargarMisObjetos();
    }

    cargarMisObjetos() {
        axios.get('http://localhost:8000/manejador/obtener_objetos', {
            params: {
                usuario_id: this.props.usuario._id,
                tipo: this.props.usuario.tipo
            }
        }).then((respuesta) => {
            this.setState({ objetos: respuesta.data });
        }).catch((razon) => {
            alert(razon);
        });
    }

    cambiarPantalla() {
        this.setState({ pantallaTabla: !this.state.pantallaTabla, objetoSeleccionado: null })
    }

    cargarFilas(cadena_busqueda) {
        axios.get("http://localhost:8000/manejador/buscar_objetos", {
            params: { cadena_de_busqueda: cadena_busqueda }
        }).then((respuesta) => {
            this.setState({ objetos: respuesta.data });
        });
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

    renderizarPantallaMisObjetos() {
        if (this.state.pantallaTabla) {
            if (this.state.objetos.objetos_encontrados) {
                
                return (
                    <div className="cuerpo-mis-objetos">
                        <BuscadorObjetos funcionCargarFilas={this.cargarFilas} funcionCambiarPantalla={this.cambiarPantalla} usuario={this.props.usuario} />
                        <TablaObjetos datos={this.state.objetos} funcionSeleccionar={this.seleccionarObjeto} encabezados={["Nombre del Objeto de Aprendizaje", "Descripción", "Temas"]} botones />
                    </div>
                )
            }
            else {
                return null;
            }
        }
        else if (this.state.pantallaTabla == false && this.state.objetoSeleccionado != null) {
            return (
                <CuerpoMostrarObjeto objeto={this.state.objetoSeleccionado} funcionCambiarPantalla={this.cambiarPantalla} />
            )
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