import React from "react";
import { withCookies } from "react-cookie";

import EntradaTexto from "../EntradaTexto/EntradaTexto";

class FormularioLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            contraseña: "",
        };

        this.manejarCambios = this.manejarCambios.bind(this);
        this.manejarSubmit = this.manejarSubmit.bind(this);
    }

    manejarCambios(evento) {
        const control = evento.target;
        const valor = control.value;
        const name = control.name;

        this.setState({
            [name]: valor
        });
    }

    manejarSubmit(evento) {
        evento.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.manejarSubmit} className="formulario-login">
                <div className="seccion-formulario">
                    <EntradaTexto name="email" label="Correo electrónico" onChange={this.manejarCambios} type="email" width={'20em'} />
                </div>
                <div className="seccion-formulario">
                    <EntradaTexto name="contraseña" label="Contraseña" onChange={this.manejarCambios} type="password" width={'20em'} />
                </div>
                <button className="boton-entregar" onClick={() => this.props.alEntregar({email:this.state.email, contraseña:this.state.contraseña})} >INICIAR</button>
            </form>
        );
    }
}

export default withCookies(FormularioLogin);