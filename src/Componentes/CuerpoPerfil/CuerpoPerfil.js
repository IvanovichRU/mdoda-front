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
            <div className="cuerpo-perfil">
                <div className="contenedor-titulo-boton">
                    <h2 className="titulo-perfil">Perfil</h2>
                    <button className="boton-editar">Eliminar</button>
                    <button className="boton-cambiar-contraseña">Cambiar Contraseña</button>
                </div>
                <div className="contenedor-informacion-perfil">
                    <label>Nombre:</label>
                    <label>Piolin Mamado</label>
                </div>
            </div>
        );
    }
}

export default CuerpoPerfil;