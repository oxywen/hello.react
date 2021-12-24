import React from "react";

class WFormInput extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const clazz = this.props.name ? "w-form-item-input" : "w-form-item-control"
        return (
            <div className={clazz}>{this.props.children}</div>
        );
    }

}

export default WFormInput;