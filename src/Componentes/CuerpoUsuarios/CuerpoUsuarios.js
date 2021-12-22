import React from "react"
import "./CuerpoUsuarios.css"
import BuscadorUsuarios from "../BuscadorUsuarios/BuscadorUsuarios"

class CuerpoUsuarios extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="cuerpo-usuarios">
                <BuscadorUsuarios />
            </div>
        )
    }

}

export default CuerpoUsuarios;