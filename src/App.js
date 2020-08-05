import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/cakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/iceCreamContainer';
import BiscuitContainer from './components/biscuitContainer';
import ModalContainer from './components/modalContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <CakeContainer />
      <HooksCakeContainer />
      <IceCreamContainer />
      <BiscuitContainer />
      <ModalContainer />
    </div>
    </Provider>
  );
}

export default App;
