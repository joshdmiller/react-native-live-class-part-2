import React from 'react';
import reactStamp from 'react-stamp';
import RN2AppFactory from './RN2App';
import PlaygroundFactory from './Playground';

export default function setup () : React.Component {
  const RN2App = RN2AppFactory( React );
  const Playground = PlaygroundFactory( React );

  const Root = reactStamp( React ).compose({
    render () {
      return (
        <Playground />
      );
    },
  });

  return Root;
};

