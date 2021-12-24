import React from "react";
import './style/Index.less'

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
            <form className="w-form w-col-form" onSubmit={this.onSubmit}>
                {this.props.children}
            </form>
        );
    }
}

export default WForm;