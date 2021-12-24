import React from "react";
import WFormLabel from "./WInternalFormLabel";
import WFormInput from "./WInternalFormInput";

class WInternalFormItem extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="w-form-item">
                {this.props.name? <WFormLabel for={this.props.name} label={this.props.label}/>: null }
                <WFormInput name = {this.props.name}>
                    {this.props.children}
                </WFormInput>
            </div>
        );
    }
}
export default WInternalFormItem;