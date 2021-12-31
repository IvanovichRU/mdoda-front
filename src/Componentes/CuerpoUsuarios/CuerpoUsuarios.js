import React from "react"
import "./CuerpoUsuarios.css"
import BuscadorUsuarios from "../BuscadorUsuarios/BuscadorUsuarios"
import TablaObjetos from "../TablaObjetos/TablaObjetos";
import CuerpoNuevoUsuario from "../CuerpoNuevoUsuario/CuerpoNuevoUsuario"

class CuerpoUsuarios extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuarios: [],
            mostrarUsuario: false
        }

        this.cambiarPantalla = this.cambiarPantalla.bind(this);
    }

    cambiarPantalla(){
        this.setState({mostrarUsuario: !this.state.mostrarUsuario})
    }

    render() {
        if(this.state.mostrarUsuario){
            return <CuerpoNuevoUsuario />
        }
        return (
            <div className="cuerpo-usuarios">
                <BuscadorUsuarios cambiarPantalla={this.cambiarPantalla} />
                <TablaObjetos datos={this.state.usuarios} encabezados={["Usuario", "Objetos de aprendizaje", "Rol"]} />
            </div>
        )
    }

}

export default CuerpoUsuarios;