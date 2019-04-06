import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import Main from './pages/main';

const Routes = createAppContainer(
  createSwitchNavigator({
    SignIn,
    SignUp,
    Main
  })
);

export default Routes;
