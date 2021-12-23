import React from "react";

class WFormInput extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="w-form-input">{this.props.children}</div>
        );
    }

}

export default WFormInput;