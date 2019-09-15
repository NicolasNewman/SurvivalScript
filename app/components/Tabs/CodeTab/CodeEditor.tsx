import * as React from 'react';
import { Component } from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

export default class CodeEditor extends Component {
    render() {
        return <TextArea autosize={{ minRows: 22 }} />;
    }
}
