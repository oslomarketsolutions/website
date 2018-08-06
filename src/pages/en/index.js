import React from 'react';
import PropTypes from 'prop-types';
import IndexPageTemplate from '../../templates/indexPage';

const IndexPage = ({ location, data }) => (
  <IndexPageTemplate language={location.pathname} data={data} />
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
    imageSizes: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object),
    }),
  }),
  location: PropTypes.shape({}),
};

export default IndexPage;

export const pageQuery = graphql`
  query EngIndexQuery {
    page: markdownRemark(id: { regex: "/src/pages/en/index.md/" }) {
      frontmatter {
        hero {
          title
          subtitle
        }
        transitionalElement {
          numbersAndText {
            companiesNumber
            companiesText
            usersNumber
            usersText
            text
          }
          customerLogos {
            logo
            name
          }
        }
        investorPortal {
          header
          investorPortalImages {
            image
            name
          }
          text
        }
        customization {
          header
          text
          cards {
            header
            description
            features
            isDark
          }
          serviceIntegrations {
            header
            text
            integrationLogos {
              logo
              name
            }
          }
        }
        otherProducts {
          arena {
            image
            header
            text
          }
          irModules {
            image
            header
            text
          }
        }
      }
    }

    imageSizes: allFile(filter: { absolutePath: { regex: "/static/img/" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            sizes(maxWidth: 2560) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
