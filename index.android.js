/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Button
} from 'react-native';

export default class MyApp extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ id: 0, title: 'Splash' }}
        navigationBar={
          <Navigator.NavigationBar
            style={{ backgroundColor: 'red' }}
            routeMapper={{
              LeftButton: (route, navigator, index, navState) => <Text>{index > 0 && navState.routeStack[index - 1].title}</Text>,
              Title: (route, navigator, index, navState) => <Text>{route.title}</Text>,
              RightButton: (route, navigator, index, navState) => <Text>Forward</Text>
            }}
          />
        }
        renderScene={this._renderScene.bind(this)}
      />
    );
  }

  _renderScene(route, navigator) {
    console.log('Route', route);
    if (route.title == 'Splash')
      return (
        <View style={{ flex: 1, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 50 }}>Splash Page!!!</Text>
          <Button onPress={() => navigator.push({ id: 1, title: 'Page1' })} title='Next Page' />
        </View>
      );
    else if (route.title === 'Page1')
      return (
        <View style={{ flex: 1, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 50 }}>{route.title}!!!</Text>
          <Button onPress={() => navigator.push({ id: 1, title: 'Page1' })} title='Next Page' />
          <Button onPress={() => navigator.popToTop()} title="Go back" />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MyApp', () => MyApp);
