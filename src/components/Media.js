import React, { Component, PropTypes } from 'react';

export default class Media extends Component {
  constructor(props, context){
    super(props, context);
  }

  renderMediaItem(media, index) {
    return <div className=""></div>;
  }

  render() {
    return (
      <div className="media-container">
        <h3>Media</h3>
        {this.props.media.get('data').size > 0 ? this.props.media.get('data').map(this.renderMediaItem) : ''}
      </div>
    )
  }
};

Media.propTypes = {
  media: PropTypes.object.isRequired
};
