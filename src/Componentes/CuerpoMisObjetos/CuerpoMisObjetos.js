import React from "react"
import "./CuerpoMisObjetos.css"
import BuscadorObjetos from "../BuscadorObjetos/BuscadorObjetos"

class CuerpoMisObjetos extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="cuerpo-mis-objetos">
                <BuscadorObjetos />
            </div>
        )
    }
}

export default CuerpoMisObjetos;