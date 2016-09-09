import React, { Component, PropTypes } from 'react';

export default class CollectionAdd extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <form onSubmit={(event, val) => this.props.handleSubmit(event, val)}>
          <label htmlFor="hashtag">Hashtag: </label>
          <input id="hashtag" placeholder="#cats" type="text" required/>
          <div className="collection-buttons">
            <button type="submit">Add to Collection</button>
          </div>
        </form>
      </div>
    );
  }
}
