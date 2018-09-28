import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './stores/store';

import FormContainer from './components/FormContainer';
import Gallery from './components/Gallery';

class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <div className="App">
            <FormContainer />
            <Gallery />
      </div>
    </Provider>
    );
  }
}

export default App;
