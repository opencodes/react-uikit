import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Button extends Component {
    static propTypes = {
        style : PropTypes.any,
        buttonText : PropTypes.string,
    }

    render() {
        const {style, buttonText} = this.props;
        return (
            <button style={style}>
                {buttonText || 'Button'}
            </button>
        )
    }
}

export default Button
