import React from "react";
import './Login.css';
import FormularioLogin from "./FormularioLogin";

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="contenedor-login">
                <h1 className="titulo">Login</h1>
                <FormularioLogin alEntregar={this.props.alEntregar}/>
            </div>
        )
    }
}

export default Login;