import React from "react";

class WInternalFormLabel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(!this.props.label){
            return null;
        }
        return (
            <div className="w-form-item-label">
                <label htmlFor={this.props.for}>{this.props.label}</label>
            </div>
        )
    }

}

export default WInternalFormLabel;