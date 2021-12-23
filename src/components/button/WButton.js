import React from "react";

class WButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { type: this.props.type || "button" }
    }

    render() {
        return (
            <button type={this.state.type}>{this.props.children}</button>
        );
    }

}
export default WButton;