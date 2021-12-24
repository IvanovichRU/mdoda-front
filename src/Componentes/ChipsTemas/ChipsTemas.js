import React from "react";
// import Chips, { Chip } from '../src'
import Chips from "react-chips/lib/Chips";

class ChipsTemas extends React.Component{
    constructor(props){
        super(props);
        this.state={
            chips: []
        }
        this.alCambiar = this.alCambiar.bind(this);
    }

    alCambiar = chips => {
        this.setState({ chips });
    }

    render(){
        return(
            <div>
                <Chips
                    value={this.state.chips}
                    onChange={this.alCambiar}
                    placeholder = {this.props.placeholder}
                />
            </div>
        );
    }
}
export default ChipsTemas;