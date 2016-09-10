import React, { Component } from 'react';

export default class Spinner extends Component {
  constructor(props, context){
    super(props, context);
  }

  render() {
    return (
      <div className='loading'>Loading&#8230;</div>
    )
  }
};
