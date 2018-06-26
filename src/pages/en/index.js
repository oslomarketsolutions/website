import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import caretDown from '@fortawesome/fontawesome-free-solid/faCaretDown';
import styles from '../indexPage.module.scss';

const IndexPage = ({ data }) => {
  const {
    topImage,
    configurationLogos,
    header1,
    image,
    text,
    header2,
  } = data.markdownRemark.frontmatter;

  const onScrollButtonClick = () => {
    console.log('Scroll');
  };

  return (
    <div className={styles.homePage}>
      <section className={styles.animation}>
        <button className={styles.scrollButton} onClick={onScrollButtonClick}>
          <FontAwesomeIcon icon={caretDown} size="2x" />
        </button>
        <img src={topImage} alt="" />
      </section>
      <section className={styles.configurationLogos}>
        {configurationLogos.map(logo => <img src={logo} alt={logo} />)}
      </section>
      <section className={styles.featuredCase}>
        <div>
          <h2>{header1}</h2>
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
  query EnIndexQuery {
    markdownRemark(id: { regex: "/src/pages/en/index.md/" }) {
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
