import React from "react";
import WFormLabel from "./WFormLabel";
import WFormInput from "./WFormInput";

class WFormItem extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="w-form-item">
                <WFormLabel label={this.props.label}/>
                <WFormInput name = {this.props.name}>
                    {this.props.children}
                </WFormInput>
            </div>
        );
    }
}
export default WFormItem;