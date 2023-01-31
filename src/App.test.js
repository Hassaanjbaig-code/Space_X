
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './redux/configureStore';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';

describe('test render', () => {
  test('List Rocket should match snapshoot', () => { 
    const tree = renderer.create(
      <React.StrictMode>
      <Provider store={configureStore}>
        <Router>
          <App />
        </Router>
      </Provider>
    </React.StrictMode>,
    ).toJSON()
    console.log('AAAAAAAAAAAAA:', tree)
    expect(tree).toMatchSnapshot();
  })
})
