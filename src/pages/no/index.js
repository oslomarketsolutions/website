import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import caretDown from '@fortawesome/fontawesome-free-solid/faCaretDown';
import styles from '../indexPage.module.scss';
import FeatureCard from '../../components/featureCard';
import { findImageSize } from '../../components/helperFunctions';
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
          src={topImage}
          alt="Picture of a mug with steaming hot coffe"
          sizes={findImageSize(topImage, imageSizes)}
          outerWrapperClassName={styles.imageContainer}
          style={{ height: '100%', width: '100%' }}
        />
      </section>
      <section className={styles.configurationLogos}>
        {configurationLogos &&
          configurationLogos.map(configurationLogo => (
            <ImageWrapper
              src={configurationLogo.logo}
              alt={configurationLogo.logo}
              sizes={findImageSize(configurationLogo.logo, imageSizes)}
              outerWrapperClassName={styles.imageContainer}
              style={{ height: '100%', width: '100%' }}
            />
          ))}
      </section>
      <section className={styles.featuredCase}>
        <h2>{featuredContent.header}</h2>
        <p>{featuredContent.text}</p>
        <ImageWrapper
          src={featuredContent.image}
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
                image={customizationCard.image}
              />
            ))}
        </section>
      </section>

      <section className={styles.solutions}>
        <article className={styles.solution}>
          <ImageWrapper
            src={solutionsContent.firstCard.image}
            outerWrapperClassName={styles.imageContainer}
            style={{ height: '100%', width: '100%' }}
            sizes={findImageSize(solutionsContent.firstCard.image, imageSizes)}
          />
          <h4> {solutionsContent.firstCard.header} </h4>
          <p> {solutionsContent.firstCard.text} </p>
        </article>
        <article className={styles.solution}>
          <ImageWrapper
            src={solutionsContent.secondCard.image}
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
            <ImageWrapper
              src={customerLogo.logo}
              outerWrapperClassName={styles.imageContainer}
              sizes={findImageSize(customerLogo.logo, imageSizes)}
              style={{ height: '100%', width: '100%' }}
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
