import * as React from 'react';
import { Component } from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

interface IProps {
    allText: Array<String>;
}

export default class Output extends Component<IProps> {
    text: string;

    componentWillUpdate() {}
    render() {
        console.log(this.props.allText);
        console.log(this.text);
        this.text = this.props.allText.join('\n');
        return <TextArea value={this.text} autosize={{ minRows: 5 }} />;
    }
}
