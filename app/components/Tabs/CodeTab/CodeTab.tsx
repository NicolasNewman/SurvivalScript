import * as React from 'react';
import { Component } from 'react';

import CodeEditor from './CodeEditor';
import Output from './Output';

export default class CodeTab extends Component {
    render() {
        return (
            <div className="code-tab">
                <CodeEditor />
                <Output />
            </div>
        );
    }
}
