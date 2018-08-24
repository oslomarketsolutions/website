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
  query EngIndexQuery {
    page: markdownRemark(id: { regex: "/src/pages/en/index.md/" }) {
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
          desktopImage
          tabletImage
          mobileImage
          text
          buttonText
          id
        }
        customization {
          header
          text
          cards {
            icon
            header
            description
            features
            isDark
            buttonText
            id
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
            desktopImage
            tabletImage
            mobileImage
            header
            text
            buttonText
            id
          }
          irModules {
            desktopImage
            tabletImage
            mobileImage
            header
            text
            buttonText
            id
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
