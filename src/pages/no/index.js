import React from 'react';
import PropTypes from 'prop-types';
import IndexPageTemplate from '../../templates/indexPage';

const IndexPage = ({ location, data }) => (
  <IndexPageTemplate location={location} data={data} />
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
  query NorIndexQuery {
    page: markdownRemark(id: { regex: "/src/pages/no/index.md/" }) {
      frontmatter {
        hero {
          title
          subtitle
          buttonText
        }
        transitionalElement {
          socialMediaText
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
          buttonText
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
            integrationsLogos {
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
            buttonText
          }
          irModules {
            image
            header
            text
            buttonText
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
