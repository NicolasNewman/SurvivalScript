import * as React from 'react';
import { Component } from 'react';

import ReactMarkdown from 'react-markdown';

interface IProps {
    text: string;
}

export default class APITab extends Component<IProps> {
    render() {
        console.log(this.props.text);
        return (
            <div className="api-tab">
                <ReactMarkdown source={this.props.text} escapeHtml={false} />
            </div>
        );
    }
}
