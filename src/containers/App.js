import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as CollectionActions from '../actions/CollectionActions';
import Collection from '../components/Collection';
import Media from '../components/Media';
import Spinner from '../components/Spinner';

export class App extends Component {
  render() {
    const { collections, media, actions } = this.props;

    return (
      <div className="main-app-container">
        <div className="main-app-nav">Instagram Collections</div>
        <Collection collections={collections} actions={actions} />
        {media.get('isLoading') ? <Spinner /> : <Media media={media} />}
      </div>
    );
  }
}

App.propTypes = {
  collections: PropTypes.object.isRequired,
  media: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    collections: state.collections,
    media: state.media
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CollectionActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
