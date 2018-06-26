import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styles from '../indexPage.module.scss';
import image from '../../../static/img/jumbotron.jpg';

export default function IndexPage({ data }) {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div className={styles.homePage}>
      <section className={styles.animation}>
        <img src={image} alt="" />
      </section>
      <section className={styles.configurationLogos}>
        <img src={image} alt="" />
      </section>
      <section className={styles.featuredCase}>
        <div>
          <h2>Featuredcase</h2>
        </div>
      </section>
      <section className={styles.customizationCards} />
      <section className={styles.solutions} />
      <section className={styles.customerLogos} />
    </div>
  );
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export const pageQuery = graphql`
  query EnIndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            language
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
