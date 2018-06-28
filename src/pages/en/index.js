import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import caretDown from '@fortawesome/fontawesome-free-solid/faCaretDown';
import styles from '../indexPage.module.scss';

const IndexPage = ({ data }) => {
  const {
    topImage,
    configurationLogos,
    featuredContent,
    solutionsContent,
    customerLogos,
  } = data.markdownRemark.frontmatter;

  const onScrollButtonClick = () => {
    // TODO: scroll
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
        {configurationLogos.map(configurationLogo => (
          <img src={configurationLogo.logo} alt={configurationLogo.logo} />
        ))}
      </section>
      <section className={styles.featuredCase}>
        <div>
          <img src={featuredContent.image} alt={featuredContent.image} />
          <h2>{featuredContent.header}</h2>
          <p>{featuredContent.text}</p>
        </div>
      </section>
      <section className={styles.customizationCards}>
        <article>Kort 1</article>
        <article>Kort 2</article>
        <article>Kort 3</article>
      </section>
      <section className={styles.solutions}>
        <article>
          <img
            src={solutionsContent.firstCard.image}
            alt={solutionsContent.firstCard.image}
          />
          <h2> {solutionsContent.firstCard.header} </h2>
          <p> {solutionsContent.firstCard.text} </p>
        </article>
        <article>
          <img
            src={solutionsContent.secondCard.image}
            alt={solutionsContent.secondCard.image}
          />
          <h2> {solutionsContent.secondCard.header} </h2>
          <p> {solutionsContent.secondCard.text} </p>
        </article>
      </section>
      <section className={styles.customerLogos}>
        {customerLogos.map(customerLogo => (
          <img src={customerLogo.logo} alt={customerLogo.logo} />
        ))}
      </section>
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
        featuredContent {
          header
          image
          text
        }
        configurationLogos {
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
          logo
        }
      }
    }
  }
`;
