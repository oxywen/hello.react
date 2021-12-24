import React from "react";

class WInternalFormTextItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="w-form-item w-form-item-text">
                <span>{this.props.children}</span>
            </div>
        );
    }
}
export default WInternalFormTextItem;