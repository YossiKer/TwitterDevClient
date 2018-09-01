import React, { Component } from 'react';

export default class TextArea extends Component {
    constructor() {
        super();

        this.state = {
            textareaLines: 1,
            currValue: '',
            style: {
                resize: "none"
            }
        }
    }

    handleInput(event) {
        const currTweet = event.target.value;

        const lineBreakers = currTweet.match(/\n/g);
        if (lineBreakers) {
            this.setState({
                textareaLines: lineBreakers.length + 1 > this.props.maxLines ? this.props.maxLines : lineBreakers.length + 1
            });
        } else {
            this.setState({
                textareaLines: 1
            });
        }

        this.props.onTextChange(currTweet);
        this.setState({
            currValue: currTweet
        })
    }

    render() {
        if (this.props.currValue.length === 0) {
            this.state.textareaLines = 1;
        }
        
        return (
            <textarea value={this.props.currValue} className="form-control form-control-lg" rows={this.state.textareaLines} onInput={this.handleInput.bind(this)} style={this.state.style}/>
        );
    }
}