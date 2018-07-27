import React from 'react';
import PropTypes from 'prop-types';
import IndexPageTemplate from '../../templates/indexPage';

const IndexPage = ({ data }) => <IndexPageTemplate data={data} />;

IndexPage.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
    imageSizes: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object),
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query NorIndexQuery {
    page: markdownRemark(id: { regex: "/src/pages/no/index.md/" }) {
      frontmatter {
        topImage {
          alt
          image
        }
        featuredContent {
          header
          image
          text
        }
        customization {
          header
          cards {
            header
            description
            image
            features
          }
        }

        configurationLogos {
          name
          logo
        }
        solutionsContent {
          firstCard {
            image
            header
            text
          }
          secondCard {
            image
            header
            text
          }
        }
        customerLogos {
          name
          logo
        }
      }
    }

    news: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/no/news/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            image
            sticky
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
