import React from "react"
import CuerpoAgregarObjeto from "../CuerpoAgregarObjeto/CuerpoAgregarObjeto";
import "./CuerpoPerfil.css"
import { CookiesProvider } from 'react-cookie';

class CuerpoPerfil extends React.Component {
    constructor(props) {
        super(props);
    }

    

    render() {
        return (
            <div className="cuerpo-perfil animacion-flotar-abajo">
                <div className="contenedor-titulo-perfil-boton">
                    <h2 className="titulo-perfil">Perfil</h2>
                    <button className="boton-editar">Eliminar</button>
                    <button className="boton-cambiar-contraseña">Cambiar Contraseña</button>
                </div>
                <div className="contenedor-informacion-perfil">
                    <label className="p-titulo">Nombre:</label>
                    <label className="p-contenido">Piolin Mamado recontrasuper</label>
                    <label className="p-titulo">Email:</label>
                    <label className="p-contenido">piolinrecontramamado@itsx.edu.mx</label>
                    <label className="p-titulo">Rol:</label>
                    <label className="p-contenido">MAMAestro mamado hernandez</label>
                    <label className="p-titulo">Objetos:</label>
                    <label className="p-contenidoE">10 <label className="p-contenidoE"> <span onClick={() => this.props.funcion("MisObjetos")} className="ver-objeto">Ver Objetos</span> </label> </label>
                </div>
            </div>
        );
    }
}

export default CuerpoPerfil;