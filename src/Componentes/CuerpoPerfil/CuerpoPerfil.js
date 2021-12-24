import React from "react"
import CuerpoAgregarObjeto from "../CuerpoAgregarObjeto/CuerpoAgregarObjeto";
import "./CuerpoPerfil.css"

class CuerpoPerfil extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // <div className="cuerpo-perfil">
            //     <div className="perfil"> Mi perfil </div>
            // </div>
            <CuerpoAgregarObjeto />
        )
    }
}

export default CuerpoPerfil;