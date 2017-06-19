import React, { PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TabBarItem = (props) => (
	<View>
		<Icon name={props.icon}/>
		<Text>{props.label}</Text>
	</View>
)
export default TabBarItem;