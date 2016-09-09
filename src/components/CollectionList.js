import React, { Component, PropTypes } from 'react';

import CollectionAdd from './CollectionAdd';

export default class CollectionList extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      {this.props.collections.map((collection, index) => <p key={index}>{collection.hashtag} <button className="collection-delete-button" onClick={e => {
        this.props.handleDelete(index)
      }}>X</button></p>)}
    );
  }
}
