import * as React from 'react';
import { Component } from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

interface IProps {
    code: string;
    setCode: (code: string) => void;
}

export default class CodeEditor extends Component<IProps> {
    props: IProps;
    constructor(props) {
        super(props);
    }

    codeChanged = e => {
        this.props.setCode(e.target.value);
    };

    render() {
        return (
            <TextArea
                value={this.props.code}
                onChange={this.codeChanged}
                autosize={{ minRows: 22 }}
            />
        );
    }
}
