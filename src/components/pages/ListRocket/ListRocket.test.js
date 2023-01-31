
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom'
import { Provider, useDispatch } from 'react-redux';
import React from 'react';
import ListRocket from './ListRocket';
import configureStore from '../../../redux/configureStore';

const store = configureStore
describe('test render', () => {
  test('List Rocket should match snapshoot', () => { 
    jest.mock('../../../redux/rockets/rocketReducer')
    const tree = renderer.create(
      <React.StrictMode>
        <Provider store={store}>
          <ListRocket />
        </Provider>
    </React.StrictMode>,
    ).toJSON()
    expect(tree).toMatchSnapshot();
  })
})

