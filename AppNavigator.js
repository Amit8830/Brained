import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from './Components/LoginScreen';
import StudentFormScreen from './Components/StudentFormScreen';
import HomeScreen from './Components/HomeScreen';

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
