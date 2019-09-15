import * as React from 'react';
import { Component } from 'react';

import CodeTab from './CodeTab/CodeTab';

import { Tabs } from 'antd';

const { TabPane } = Tabs;

const tabKeys = {
    TERMINAL: 'terminal',
    API: 'api'
};

export default class UserTabs extends Component {
    tabChanged = activeKey => {};

    render() {
        return (
            <Tabs onChange={this.tabChanged}>
                <TabPane tab="Code" key={tabKeys.TERMINAL}>
                    <CodeTab />
                </TabPane>
                <TabPane tab="API" key={tabKeys.API}>
                    <h1>Tab 2</h1>
                </TabPane>
            </Tabs>
        );
    }
}
