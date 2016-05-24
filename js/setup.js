import React from 'react';
import reactStamp from 'react-stamp';
import RN2AppFactory from './RN2App';

export default function setup () : React.Component {
  const RN2App = RN2AppFactory( React );

  const Root = reactStamp( React ).compose({
    render () {
      return (
        <RN2App />
      );
    },
  });

  return Root;
};

