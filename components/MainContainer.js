import React, { Component, PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import StatusScreen from './StatusScreen';
import TabBarContainer from './TabBarContainer';


class MainContainer extends Component {
	render() {
		return (
			
				<StatusScreen isUp={true}/>
			
			

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

export default MainContainer;