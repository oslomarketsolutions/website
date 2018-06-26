import React from 'react';
import PropTypes from 'prop-types';
import styles from '../indexPage.module.scss';

const IndexPage = ({ data }) => {
  const { frontmatter: page } = data.markdownRemark;

  return (
    <div className={styles.homePage}>
      <section className={styles.animation}>
        <img src={page.topImage} alt="" />
      </section>
      <section className={styles.configurationLogos}>
        <img src={page.image} alt="" />
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
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query NorIndexQuery {
    markdownRemark(id: { regex: "/src/pages/no/index.md/" }) {
      frontmatter {
        topImage
        configurationLogos
        header1
        image
        text
        header2
      }
    }
  }
`;
