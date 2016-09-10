import React, { Component } from 'react';

export default class CollectionList extends Component {
  constructor(props, context) {
    super(props, context);
  }

  renderCollectionList() {
    return this.props.collections.map(this.renderCollectionListItem.bind(this));
  }

  renderCollectionListItem(collection, index) {
    return (
      <p key={index}>
        <button type="button" className="collection-list-button" onClick={e => {this.props.handleSearch(collection)}}>{collection.hashtag} </button>
        <button type="button" className="collection-delete-button" onClick={e => {this.props.handleDelete(index)}}>X</button>
      </p>
    );
  }

  render() {
    return (
      <div className="collection-list">
        <h3>My Collections</h3>
        {this.renderCollectionList()}
      </div>
    );
  }
}
