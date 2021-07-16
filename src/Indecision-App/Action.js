import React from 'react';

export default class Action extends React.Component{
    render() {
        return(
        <button
            disabled={this.props.disabled}
            onClick={this.props.handleAction}>
            What should I do?
        </button>
        )
    }
}
