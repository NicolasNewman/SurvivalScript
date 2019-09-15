import * as React from 'react';
import { Component } from 'react';

import CodeTab from './CodeTab/CodeTab';
import APITab from './APITab/APITab';

import { Tabs } from 'antd';

const { TabPane } = Tabs;

interface IProps {
    allText: Array<string>;
    text: string;
}

const tabKeys = {
    TERMINAL: 'terminal',
    API: 'api'
};

export default class UserTabs extends Component<IProps> {
    tabChanged = activeKey => {};

    render() {
        return (
            <Tabs onChange={this.tabChanged}>
                <TabPane tab="Code" key={tabKeys.TERMINAL}>
                    <CodeTab allText={this.props.allText} />
                </TabPane>
                <TabPane tab="Command List" key={tabKeys.API}>
                    <APITab text={this.props.text} />
                </TabPane>
            </Tabs>
        );
    }
}
