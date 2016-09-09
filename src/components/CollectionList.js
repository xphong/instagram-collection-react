import React, { Component, PropTypes } from 'react';

export default class CollectionList extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="collection-list">
        <h3>Collections List</h3>
        {this.props.collections.map((collection, index) => <p key={index}><button className="collection-list-button">{collection.hashtag} </button><button className="collection-delete-button" onClick={e => {
          this.props.handleDelete(index)
        }}>X</button></p>)}
      </div>
    );
  }
}
