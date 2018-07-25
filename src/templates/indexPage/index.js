import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import caretDown from '@fortawesome/fontawesome-free-solid/faCaretDown';
import styles from './indexPage.module.scss';
import FeatureCard from '../../components/featureCard';
import NewsCard from '../../components/newsCard';
import { findImageSizes } from '../../utils/helperFunctions';
import ImageWrapper from '../../components/imageWrapper';

const IndexPageTemplate = ({ data }) => {
  const {
    topImage,
    configurationLogos,
    featuredContent,
    customization,
    solutionsContent,
    customerLogos,
  } = data.page.frontmatter;

  const news = data.news.edges;
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
      <section className={styles.news}>
        <h2>Hei her kommer det linker til news!</h2>
        {news &&
          news.map(newsArticle => {
            const { frontmatter: content, fields } = newsArticle.node;
            return (
              <NewsCard
                slug={fields.slug}
                title={content.title}
                description={content.description}
                image={content.image}
                sizes={findImageSizes(content.image, imageSizes)}
              />
            );
          })}
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

IndexPageTemplate.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
    news: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object),
    }),
    imageSizes: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object),
    }),
  }),
};

export default IndexPageTemplate;
