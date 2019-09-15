import * as React from 'react';
import { Component } from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

interface IProps {
    allText: Array<String>;
}

export default class Output extends Component<IProps> {
    text: string;
    outputLog: any;

    constructor(props) {
        super(props);

        this.outputLog = React.createRef();
    }

    componentDidUpdate() {
        console.log('Output log ', this.outputLog);
        console.log(this.outputLog.current.textAreaRef.scrollTop);
        console.log(this.outputLog.current.textAreaRef.scrollHeight);
        this.outputLog.current.textAreaRef.scrollTop = this.outputLog.current.textAreaRef.scrollHeight;
    }

    render() {
        console.log(this.props.allText);
        console.log(this.text);
        this.text = this.props.allText.join('\n');
        return (
            <div className="scroll-wrapper">
                <TextArea
                    ref={this.outputLog}
                    value={this.text}
                    autosize={{ minRows: 5 }}
                />
            </div>
        );
    }
}
