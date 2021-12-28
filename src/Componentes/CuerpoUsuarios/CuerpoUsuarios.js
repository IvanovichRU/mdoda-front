import React from "react"
import "./CuerpoUsuarios.css"
import BuscadorUsuarios from "../BuscadorUsuarios/BuscadorUsuarios"
import TablaObjetos from "../TablaObjetos/TablaObjetos";

class CuerpoUsuarios extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuarios: []
        }
    }

    render() {
        return (
            <div className="cuerpo-usuarios">
                <BuscadorUsuarios />
                <TablaObjetos datos={this.state.usuarios} encabezados={["Usuario", "Objetos de aprendizaje", "Rol"]} />
            </div>
        )
    }

}

export default CuerpoUsuarios;