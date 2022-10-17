import React from 'react';
import './App.scss';
import Home from 'pages/Home';
import { StoreProvider } from 'core/providers/StoreProvider';
import AppStore from 'core/state/AppStore';

const store = new AppStore() 
function App() {
  return (
    <div data-testid='app'>
      <StoreProvider store={store}>
        <Home/>
      </StoreProvider>
    </div>
  );
}

export default App;
