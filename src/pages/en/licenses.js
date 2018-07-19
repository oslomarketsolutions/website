import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class LicensesPage extends Component {
  static propTypes = {
    data: PropTypes.shape({
      file: PropTypes.shape({
        publicURL: PropTypes.string,
      }),
    }),
  };

  state = {
    licenses: '',
    loading: true,
  };

  componentDidMount() {
    // Fetch the licenses.md file
    fetch(this.props.data.file.publicURL)
      .then(response => response.text())
      .then(text => {
        this.setState({
          licenses: text,
          loading: false,
        });
      });
  }

  render() {
    return (
      <pre style={{ padding: '200px 20px' }}>
        {this.state.loading ? 'Loading licenses' : this.state.licenses}
      </pre>
    );
  }
}

export default LicensesPage;

export const licensesPageQuery = graphql`
  query EngLicensesPage {
    file(id: { regex: "/licenses.md/" }) {
      publicURL
    }
  }
`;
