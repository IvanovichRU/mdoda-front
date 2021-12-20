import React from "react";
import './Cuerpo.css';

class Cuerpo extends React.Component {
    render() {
        return (
            <div className="cuerpo">
                {this.props.children}
            </div>
        )
    }
}

export default Cuerpo;