import * as React from 'react';
import { Component } from 'react';

import ReactMarkdown from 'react-markdown';

const input = '# This is a header';

export default class APITab extends Component {
    render() {
        return (
            <div>
                <ReactMarkdown source={input} />
            </div>
        );
    }
}
