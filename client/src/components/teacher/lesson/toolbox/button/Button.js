import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <div className="">
                <button onClick={this.props.addContent}>{this.props.label}</button>
            </div>
        );
    }
}

export default Button;
