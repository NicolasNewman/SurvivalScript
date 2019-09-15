import * as React from 'react';
import { Component } from 'react';

import CodeEditor from './CodeEditor';
import Output from './Output';

interface IProps {
    allText: Array<String>;
    code: string;
    setCode: (code: string) => void;
}

export default class CodeTab extends Component<IProps> {
    props: IProps;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="code-tab">
                <CodeEditor
                    code={this.props.code}
                    setCode={this.props.setCode}
                />
                <Output allText={this.props.allText} />
            </div>
        );
    }
}
