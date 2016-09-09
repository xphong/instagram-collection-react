import React, { Component, PropTypes } from 'react';

import CollectionAdd from './CollectionAdd';

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

  handleSubmit(event, val) {
    event.preventDefault();
    console.log(val);
  }

  render() {
    return (
      <div className="collection-container">
        <CollectionAdd handleSubmit={this.handleSubmit} />
        {this.props.collections.map((collection, index) => <p key={index}>{collection.hashtag} <button onClick={e => {
          this.handleDelete(index)
        }}>X</button></p>)}
      </div>
    );
  }
}

CollectionList.propTypes = {
  collections: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};
