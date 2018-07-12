import React from 'react';
import PropTypes from 'prop-types';

class RedirectPage extends React.Component {
  componentDidMount() {
    this.props.history.push('/en');
  }

  render() {
    return null;
  }
}

RedirectPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default RedirectPage;
