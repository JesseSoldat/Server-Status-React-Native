import React, { PropTypes } from 'react';
import { StyleSheet } from 'react-native';
import Tabs from 'react-native-tabs';

import TabBarItem from './TabBarItem';

const TabBarContainer = (props) => (
	<Tabs>
		<TabBarItem name="web" label="Web Server" icon="server"/>
	</Tabs>
)

export default TabBarContainer;