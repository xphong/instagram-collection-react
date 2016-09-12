import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class CollectionForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { hashtag: null, startDate: null, endDate: null };
  }

  handleAdd() {
    if (!this.state.hashtag) {
      alert('Please enter a hashtag');
      return;
    }

    this.props.handleAdd(this.state);
    this.resetForm();
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSearch(event) {
    event.preventDefault();
    this.props.handleSearch(this.state);
    this.resetForm();
  }

  resetForm() {
    ReactDOM.findDOMNode(this.refs.collectionForm).reset();
    this.state = { hashtag: null, startDate: null, endDate: null };
  }

  render() {
    return (
      <div className="collection-form">
        <form ref="collectionForm" onSubmit={this.handleSearch.bind(this)} onChange={this.handleInputChange.bind(this)}>
          <div className="collection-form-input">
            <label htmlFor="hashtag">*Hashtag: </label>
            <input name="hashtag" placeholder="nalcs2016" type="text" required/>
          </div>
          <div className="collection-form-input">
            <label htmlFor="startDate">Start Date: </label>
            <input name="startDate" placeholder="2016-01-01" type="date"/>
          </div>
          <div className="collection-form-input">
            <label htmlFor="endDate">End Date: </label>
            <input name="endDate" placeholder="2016-12-31" type="date"/>
          </div>
          <div className="collection-buttons">
            <button type="button" onClick={this.handleAdd.bind(this)}>Add Collection</button>
            <button type="submit">Search Collection</button>
          </div>
        </form>
      </div>
    );
  }
}
