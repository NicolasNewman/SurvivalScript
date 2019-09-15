import * as React from 'react';
import { Component } from 'react';

import CodeEditor from './CodeEditor';
import Output from './Output';

interface IProps {
    allText: Array<String>;
}

export default class CodeTab extends Component<IProps> {
    render() {
        return (
            <div className="code-tab">
                <CodeEditor />
                <Output allText={this.props.allText} />
            </div>
        );
    }
}
