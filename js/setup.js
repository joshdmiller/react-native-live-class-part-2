import React from 'react';
import reactStamp from 'react-stamp';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import RN2AppFactory from './RN2App';
import PlaygroundFactory from './Playground';

export default function setup () : React.Component {
  const RN2App = RN2AppFactory( React );
  const Playground = PlaygroundFactory( React );

  const Root = reactStamp( React ).compose({
    init () {
      this.state = {
        store: configureStore(),
      };
    },

    render () {
      return (
        <Provider store={this.state.store}>
          <RN2App />
        </Provider>
      );
    },
  });

  return Root;
};

