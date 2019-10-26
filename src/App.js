import { hot } from 'react-hot-loader/root';
import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Routing from './Routing';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';


// const MyContext = React.createContext("3");
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter >
        <Routing/>
      </BrowserRouter>
    </Provider>
  );
}

export default hot(App);
