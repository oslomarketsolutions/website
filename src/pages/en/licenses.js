import React from 'react';
import PropTypes from 'prop-types';
import { HTMLContent } from '../../components/content';

const LicensesPage = ({ data }) => (
  <main style={{ paddingTop: '200px' }}>
    <HTMLContent content={data.markdownRemark.html} />
  </main>
);

export default LicensesPage;

LicensesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
    }),
  }),
};

export const licensesPageQuery = graphql`
  query LicensesPage {
    markdownRemark(id: { regex: "/licenses.md/" }) {
      html
    }
  }
`;
