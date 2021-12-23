import React from "react";

class WFormLabel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(!this.props.label){
            return null;
        }
        return (
            <div>
                <label>{this.props.label}</label>
            </div>
        )
    }

}

export default WFormLabel;