// App.js
import React from 'react';
import {Provider} from 'react-redux'; // Import Provider
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './Components/LoginScreen';
import StudentFormScreen from './Components/StudentFormScreen';
import HomeScreen from './Components/HomeScreen';
import store from './Store/store'; // Import your Redux store

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="StudentForm" component={StudentFormScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
