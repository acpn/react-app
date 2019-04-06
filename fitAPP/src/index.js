import '~/config/ReactotronConfig';

import React from 'react';
import { Provider } from 'react-redux';

import Routes from './routes';
import { setNavigator } from './services/navigation';
import globalState from './store';

const App = () => (
  <Provider store={globalState}>
    <Routes ref={setNavigator} />
  </Provider>
);

export default App;
