// export default function App() {
//   return <Navigation />;
// }
// import {AppRegistry} from 'react-native';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { View, Text, Button, TextInput, FlatList, ActivityIndicator } from 'react-native';
// import { ListItem, Avatar, SearchBar } from 'react-native-elements';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/stack';

import React, { PureComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import { InitApp } from './Redux/appReduser';

const Stack = createStackNavigator();

class App extends PureComponent {
  render(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Calculator" component={Calculator} />
        <Stack.Screen name="Author" component={AuthorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
};

const mapStateToProps = (state) => {
  return {
    isInit: state.app.isInit
  }
}

export default connect(mapStateToProps, { InitApp })(App);
