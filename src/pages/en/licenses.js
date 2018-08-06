import React, { Component } from 'react';
// Polyfill for fetch in IE11
import 'whatwg-fetch';
import styles from '../licensesPage.module.scss';

export class LicensesPage extends Component {
  state = {
    licenses: '',
    loading: true,
  };

  componentDidMount() {
    // Fetch the licenses.txt file
    fetch('/licenses.txt')
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
      <pre className={styles.licensesContainer}>
        {this.state.loading ? 'Loading licenses' : this.state.licenses}
      </pre>
    );
  }
}

export default LicensesPage;
