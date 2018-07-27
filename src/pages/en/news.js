import React from 'react';
import PropTypes from 'prop-types';
import NewsOverviewPageTemplate from '../../templates/newsOverviewPage/news';

const NewsOverviewPage = ({ data }) => {
  const { edges: newsArticles } = data.news;
  const imageSizes = data.imageSizes.edges;

  return (
    <NewsOverviewPageTemplate
      newsArticles={newsArticles}
      imageSizes={imageSizes}
    />
  );
};

NewsOverviewPage.propTypes = {
  data: PropTypes.shape({
    news: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object),
    }),
  }),
};

export default NewsOverviewPage;

export const newsOverviewPageQuery = graphql`
  query EngNewsOverviewPage {
    news: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/en/news/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            sticky
            title
            image
            description
            date
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
