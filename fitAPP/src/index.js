import '~/config/ReactotronConfig';

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { rootNavigator } from './routes';
import globalState from './store';

class App extends Component {
  state = {
    isLogged: false,
    checkedLoggedIn: false
  };

  componentDidMount() {
    // Precisa ver como pegar o state lá do duck
    // Pegar do globalState maybe?

    const { isLogged } = this.props;
    console.tron.log('Blabla ' + this.isLogged);
  }

  render() {
    const { isLogged, checkedLoggedIn } = this.state;

    //if (!checkedLoggedIn) return null; // Aqui ele nao mostra nada até checar o login

    const RouterView = rootNavigator(isLogged); // Envia pro rootNavigator true ou false

    return (
      <Provider store={globalState}>
        <RouterView />
      </Provider>
    );
  }
}

export default App;
