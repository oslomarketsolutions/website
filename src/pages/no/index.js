import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import caretDown from '@fortawesome/fontawesome-free-solid/faCaretDown';
import styles from '../indexPage.module.scss';
import FeatureCard from '../../components/featureCard';
import { findImageSize } from '../../components/helperFunctions';

const IndexPage = ({ data }) => {
  const {
    topImage,
    configurationLogos,
    featuredContent,
    customization,
    solutionsContent,
    customerLogos,
  } = data.page.frontmatter;

  const imageSizes = data.imageSizes.edges;

  const onScrollButtonClick = () => {
    // TODO: scroll
  };

  return (
    <main className={styles.homePage}>
      <section className={styles.animation}>
        <button className={styles.scrollButton} onClick={onScrollButtonClick}>
          <FontAwesomeIcon icon={caretDown} size="2x" />
        </button>
        <Img
          outerWrapperClassName={styles.imageContainer}
          style={{ height: '100%', width: '100%' }}
          sizes={findImageSize(topImage, imageSizes)}
        />
      </section>
      <section className={styles.configurationLogos}>
        {configurationLogos &&
          configurationLogos.map(configurationLogo => (
            <Img
              outerWrapperClassName={styles.imageContainer}
              sizes={findImageSize(configurationLogo.logo, imageSizes)}
            />
          ))}
      </section>
      <section className={styles.featuredCase}>
        <h2>{featuredContent.header}</h2>
        <p>{featuredContent.text}</p>
        <Img
          outerWrapperClassName={styles.imageContainer}
          sizes={findImageSize(featuredContent.image, imageSizes)}
        />
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
                sizes={findImageSize(customizationCard.image, imageSizes)}
              />
            ))}
        </section>
      </section>

      <section className={styles.solutions}>
        <article className={styles.solution}>
          <Img
            outerWrapperClassName={styles.imageContainer}
            style={{ height: '100%', width: '100%' }}
            sizes={findImageSize(solutionsContent.firstCard.image, imageSizes)}
          />
          <h4> {solutionsContent.firstCard.header} </h4>
          <p> {solutionsContent.firstCard.text} </p>
        </article>
        <article className={styles.solution}>
          <Img
            outerWrapperClassName={styles.imageContainer}
            style={{ height: '100%', width: '100%' }}
            sizes={findImageSize(solutionsContent.secondCard.image, imageSizes)}
          />
          <h4> {solutionsContent.secondCard.header} </h4>
          <p> {solutionsContent.secondCard.text} </p>
        </article>
      </section>
      <section className={styles.customerLogos}>
        {customerLogos &&
          customerLogos.map(customerLogo => (
            <Img
              outerWrapperClassName={styles.imageContainer}
              sizes={findImageSize(customerLogo.logo, imageSizes)}
            />
          ))}
      </section>
    </main>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
    imageSizes: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query NorIndexQuery {
    page: markdownRemark(id: { regex: "/src/pages/no/index.md/" }) {
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
