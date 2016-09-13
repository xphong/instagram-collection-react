import React, { Component, PropTypes } from 'react';

export default class Media extends Component {
  constructor(props, context){
    super(props, context);
  }

  renderTitle() {
    const media = this.props.media;
    const isDateSpecified = media.getIn(['collection', 'startDate']) && media.getIn(['collection', 'endDate']);

    if (media.get('collection').size <= 0) {
      return;
    }

    return (
      <div className="media-title">
        <h2>#{media.getIn(['collection', 'hashtag'])}</h2>
        <h3>{isDateSpecified ? `${media.getIn(['collection', 'startDate'])} to ${media.getIn(['collection', 'endDate'])}` : ''}</h3>
      </div>
    );
  }

  renderMedia() {
    const mediaData = this.props.media.get('data');
    const error = this.props.media.get('error');

    if (mediaData.size <= 0 || error) {
      return;
    }

    return (
      <div className="media-item-container">
        {mediaData.map(this.renderMediaItem.bind(this))}
      </div>
    );
  }

  renderMediaItem(item, index) {
    return (
      <div key={index} className="media-item">
        <img className="img-responsive" src={item.images.low_resolution.url} />
      </div>
    );
  }

  render() {
    return (
      <div className="media-container">
        {this.renderTitle()}
        {this.renderMedia()}
      </div>
    )
  }
};

Media.propTypes = {
  media: PropTypes.object.isRequired
};
