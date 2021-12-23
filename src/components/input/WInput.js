import React from "react";

class WInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {type: this.props.type || "text"}
    }


    render() {
        return (
            <input type={this.state.type}/>
        );
    }
}

export default WInput;
