import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import caretDown from '@fortawesome/fontawesome-free-solid/faCaretDown';
import styles from '../indexPage.module.scss';
import FeatureCard from '../../components/featureCard';
import { findImageSizes } from '../../components/helperFunctions';
import ImageWrapper from '../../components/imageWrapper';

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
        <ImageWrapper
          src={topImage.image}
          alt={topImage.alt}
          sizes={findImageSizes(topImage.image, imageSizes)}
          outerWrapperClassName={styles.imageContainer}
        />
      </section>
      <section className={styles.configurationLogos}>
        {configurationLogos &&
          configurationLogos.map(configurationLogo => (
            <ImageWrapper
              key={configurationLogo.name}
              src={configurationLogo.logo}
              alt={configurationLogo.name}
              sizes={findImageSizes(configurationLogo.logo, imageSizes)}
              outerWrapperClassName={styles.imageContainer}
            />
          ))}
      </section>
      <section className={styles.featuredCase}>
        <h2>{featuredContent.header}</h2>
        <p>{featuredContent.text}</p>
        <ImageWrapper
          alt={featuredContent.header}
          src={featuredContent.image}
          outerWrapperClassName={styles.imageContainer}
          sizes={findImageSizes(featuredContent.image, imageSizes)}
        />
      </section>
      <section className={styles.customization}>
        <h2>{customization.header}</h2>
        <section className={styles.customizationCards}>
          {customization.cards &&
            customization.cards.map(customizationCard => (
              <FeatureCard
                key={customizationCard.header}
                title={customizationCard.header}
                description={customizationCard.description}
                features={customizationCard.features}
                sizes={findImageSizes(customizationCard.image, imageSizes)}
                image={customizationCard.image}
              />
            ))}
        </section>
      </section>

      <section className={styles.solutions}>
        <article className={styles.solution}>
          <ImageWrapper
            alt={solutionsContent.firstCard.header}
            src={solutionsContent.firstCard.image}
            outerWrapperClassName={styles.imageContainer}
            sizes={findImageSizes(solutionsContent.firstCard.image, imageSizes)}
          />
          <h4> {solutionsContent.firstCard.header} </h4>
          <p> {solutionsContent.firstCard.text} </p>
        </article>
        <article className={styles.solution}>
          <ImageWrapper
            alt={solutionsContent.secondCard.header}
            src={solutionsContent.secondCard.image}
            outerWrapperClassName={styles.imageContainer}
            sizes={findImageSizes(
              solutionsContent.secondCard.image,
              imageSizes,
            )}
          />
          <h4> {solutionsContent.secondCard.header} </h4>
          <p> {solutionsContent.secondCard.text} </p>
        </article>
      </section>
      <section className={styles.customerLogos}>
        {customerLogos &&
          customerLogos.map(customerLogo => (
            <ImageWrapper
              key={customerLogo.name}
              alt={customerLogo.name}
              src={customerLogo.logo}
              outerWrapperClassName={styles.imageContainer}
              sizes={findImageSizes(customerLogo.logo, imageSizes)}
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
