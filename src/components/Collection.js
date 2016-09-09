import React, { Component, PropTypes } from 'react';

import CollectionAdd from './CollectionAdd';
import CollectionList from './CollectionList';

export default class CollectionList extends Component {
  constructor(props, context) {
    super(props, context);
  }

  handleAdd(collection) {
    this.props.actions.addCollection(collection);
  }

  handleDelete(index) {
    this.props.actions.deleteCollection(index);
  }

  render() {
    return (
      <div className="collection-container">
        <CollectionAdd handleAdd={this.handleAdd.bind(this)} />
        <CollectionList handleDelete={this.handleDelete.bind(this)} />
      </div>
    );
  }
}

CollectionList.propTypes = {
  collections: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};
