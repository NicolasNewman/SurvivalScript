import * as React from 'react';
import { Component } from 'react';

import CodeTab from './CodeTab/CodeTab';
import APITab from './APITab/APITab';

import { Tabs } from 'antd';

const { TabPane } = Tabs;

interface IProps {
    allText: Array<string>;
    text: string;
    code: string;
    setCode: (code: string) => void;
}

const tabKeys = {
    TERMINAL: 'terminal',
    API: 'api'
};

export default class UserTabs extends Component<IProps> {
    props: IProps;

    constructor(props) {
        super(props);
    }

    tabChanged = activeKey => {};

    render() {
        return (
            <Tabs onChange={this.tabChanged}>
                <TabPane tab="Code" key={tabKeys.TERMINAL}>
                    <CodeTab
                        allText={this.props.allText}
                        code={this.props.code}
                        setCode={this.props.setCode}
                    />
                </TabPane>
                <TabPane tab="Command List" key={tabKeys.API}>
                    <APITab text={this.props.text} />
                </TabPane>
            </Tabs>
        );
    }
}
