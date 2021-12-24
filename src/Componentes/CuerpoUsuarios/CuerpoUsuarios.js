import React from "react"
import "./CuerpoUsuarios.css"
import BuscadorUsuarios from "../BuscadorUsuarios/BuscadorUsuarios"
import TablaObjetos from "../TablaObjetos/TablaObjetos";

class CuerpoUsuarios extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="cuerpo-usuarios">
                <BuscadorUsuarios />
                <TablaObjetos encabezados={["Usuario", "Objetos de aprendizaje", "Rol"]} />
            </div>
        )
    }

}

export default CuerpoUsuarios;