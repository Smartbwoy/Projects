/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry, Text, View} from 'react-native';
import Component1 from './app/components/component1/Component1';
export default class MyApp extends Component{

  render(){
    return(
      <View>
      <Component1 />
      </View>
    );
  }
}

AppRegistry.registerComponent('MyApp',()=>MyApp);
