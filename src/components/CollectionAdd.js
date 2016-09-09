import React, { Component, PropTypes } from 'react';

export default class CollectionAdd extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { hashtag: null, startDate: null, endDate: null };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)} onChange={this.handleInputChange.bind(this)}>
          <label htmlFor="hashtag">Hashtag: </label>
          <input name="hashtag" placeholder="#cats" type="text" required/>
          <div className="collection-buttons">
            <button type="submit">Add to Collection</button>
          </div>
        </form>
      </div>
    );
  }
}
