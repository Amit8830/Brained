import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from './Store/LoginScreen';
import StudentFormScreen from './StudentFormScreen';
import HomeScreen from './HomeScreen';

const AppNavigator = createStackNavigator(
  {
    Login: {screen: LoginScreen},
    // StudentForm: {screen: StudentFormScreen},
    Home: {screen: HomeScreen},
  },
  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(AppNavigator);
