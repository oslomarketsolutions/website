import React from 'react';
import PropTypes from 'prop-types';
import NewsCard from '../../components/newsCard';
import styles from '../newsOverviewPage.module.scss';
import { findImageSizes } from '../../utils/helperFunctions';

export const NewsOverviewPageTemplate = ({ newsArticles, imageSizes }) => (
  <main>
    <section className={styles.newsOverviewPage}>
      <h1>News</h1>

      <section className={styles.cardContainer}>
        {newsArticles &&
          newsArticles.map(newsArticle => (
            <NewsCard
              slug={newsArticle.node.fields.slug}
              title={newsArticle.node.frontmatter.title}
              image={newsArticle.node.frontmatter.image}
              date={newsArticle.node.frontmatter.date}
              sizes={findImageSizes(
                newsArticle.node.frontmatter.image,
                imageSizes,
              )}
            />
          ))}
      </section>
    </section>
  </main>
);

NewsOverviewPageTemplate.propTypes = {
  newsArticles: PropTypes.arrayOf(PropTypes.object),
  imageSizes: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.object),
  }),
};

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
