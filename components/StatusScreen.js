import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';

import StatusIndicator from './StatusIndicator';

class StatusScreen extends Component {
	render() {
		return (
		<View>
			<StatusIndicator isUp={this.props.isUp}/>
		</View>
		)

	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})

export default StatusScreen;