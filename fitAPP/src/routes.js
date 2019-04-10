import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import '~/config/ReactotronConfig';

import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import Main from './pages/main';

const LoggedOut = createStackNavigator(
  { SignIn, SignUp },
  { headerMode: 'none' }
);

const LoggedIn = createBottomTabNavigator({ Main });

export const rootNavigator = (isLogged = false) => {
  console.tron.log('PAssou aqui');

  return createAppContainer(
    createSwitchNavigator(
      {
        LoggedOut,
        LoggedIn
      },
      {
        initialRouteName: isLogged ? 'LoggedIn' : 'LoggedOut'
      }
    )
  );
};
