import React from "react"
import "./CuerpoMisObjetos.css"
import BuscadorObjetos from "../BuscadorObjetos/BuscadorObjetos"
import TablaObjetos from "../TablaObjetos/TablaObjetos";

class CuerpoMisObjetos extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="cuerpo-mis-objetos">
                <BuscadorObjetos usuario={this.props.usuario} />
                <TablaObjetos encabezados={["Nombre del Objeto de Aprendizaje", "Descripción", "PITOS"]} botones />
            </div>
        )
    }
}

export default CuerpoMisObjetos;