import * as React from 'react';
import { Component } from 'react';

import { Tabs } from 'antd';

const { TabPane } = Tabs;

const tabKeys = {
    TERMINAL: 'terminal',
    CODE: 'code'
};

export default class UserTabs extends Component {
    tabChanged = activeKey => {};

    render() {
        return (
            <Tabs onChange={this.tabChanged}>
                <TabPane tab="Terminal" key={tabKeys.TERMINAL}>
                    <h1>Tab 1</h1>
                </TabPane>
                <TabPane tab="Code" key={tabKeys.CODE}>
                    <h1>Tab 2</h1>
                </TabPane>
            </Tabs>
        );
    }
}
