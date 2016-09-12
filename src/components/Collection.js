import React, { Component, PropTypes } from 'react';

import CollectionForm from './CollectionForm';
import CollectionList from './CollectionList';

export default class Collection extends Component {
  constructor(props, context) {
    super(props, context);
  }

  handleAdd(collection) {
    this.props.actions.collectionActions.addCollection(collection);
  }

  handleDelete(index) {
    if (confirm("Delete this collection?")) {
      this.props.actions.collectionActions.deleteCollection(index);
    }
  }

  handleSearch(collection) {
    this.props.actions.mediaActions.fetchData(collection);
  }

  render() {
    return (
      <div className="collection-container">
        <CollectionList collections={this.props.collections} handleDelete={this.handleDelete.bind(this)} handleSearch={this.handleSearch.bind(this)} />
        <CollectionForm handleAdd={this.handleAdd.bind(this)} handleSearch={this.handleSearch.bind(this)} />
      </div>
    );
  }
}

Collection.propTypes = {
  collections: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};
