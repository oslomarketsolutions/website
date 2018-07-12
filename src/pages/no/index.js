import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import caretDown from '@fortawesome/fontawesome-free-solid/faCaretDown';
import styles from '../indexPage.module.scss';
import FeatureCard from '../../components/featureCard';

const IndexPage = ({ data }) => {
  const {
    topImage,
    configurationLogos,
    featuredContent,
    customization,
    solutionsContent,
    customerLogos,
  } = data.markdownRemark.frontmatter;

  const onScrollButtonClick = () => {
    // TODO: scroll
  };

  return (
    <main>
      <div className={styles.homePage}>
        <section className={styles.animation}>
          <button className={styles.scrollButton} onClick={onScrollButtonClick}>
            <FontAwesomeIcon icon={caretDown} size="2x" />
          </button>
          <img src={topImage} alt={topImage} />
        </section>
        <section className={styles.configurationLogos}>
          {configurationLogos &&
            configurationLogos.map(configurationLogo => (
              <img src={configurationLogo.logo} alt={configurationLogo.logo} />
            ))}
        </section>
        <section className={styles.featuredCase}>
          <h2>{featuredContent.header}</h2>
          <p>{featuredContent.text}</p>
          <img src={featuredContent.image} alt={featuredContent.image} />
        </section>
        <section className={styles.customization}>
          <h2>{customization.header}</h2>
          <section className={styles.customizationCards}>
            {customization.cards &&
              customization.cards.map(customizationCard => (
                <FeatureCard
                  title={customizationCard.header}
                  description={customizationCard.description}
                  features={customizationCard.features}
                  image={customizationCard.image}
                />
              ))}
          </section>
        </section>
        <section className={styles.solutions}>
          <article className={styles.solution}>
            <img
              src={solutionsContent.firstCard.image}
              alt={solutionsContent.firstCard.image}
            />
            <h4> {solutionsContent.firstCard.header} </h4>
            <p> {solutionsContent.firstCard.text} </p>
          </article>
          <article className={styles.solution}>
            <img
              src={solutionsContent.secondCard.image}
              alt={solutionsContent.secondCard.image}
            />
            <h4> {solutionsContent.secondCard.header} </h4>
            <p> {solutionsContent.secondCard.text} </p>
          </article>
        </section>
        <section className={styles.customerLogos}>
          {customerLogos &&
            customerLogos.map(customerLogo => (
              <img src={customerLogo.logo} alt={customerLogo.logo} />
            ))}
        </section>
      </div>
    </main>
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
