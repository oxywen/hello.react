import React from "react";

class WForm extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmit = (e) => {
        console.log("ok");
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                {this.props.children}
            </form>
        );
    }
}

export default WForm;