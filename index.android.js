import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import MainContainer from './components/MainContainer';

export default class serverStatus extends Component {
  render() {
    return (
      <MainContainer/>
       
    );
  }
}



AppRegistry.registerComponent('serverStatus', () => serverStatus);
