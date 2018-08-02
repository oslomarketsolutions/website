import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Link from 'gatsby-link';
import styles from './indexPage.module.scss';
import FeatureCard from '../../components/featureCard';
import Slider from '../../components/slider/index';
import { findImageSizes } from '../../utils/helperFunctions';
import ImageWrapper from '../../components/imageWrapper';
import Button from '../../components/button/index';

const IndexPageTemplate = ({ data }) => {
  const {
    onTopOfAnimation,
    transitionalElement,
    investorPortal,
    customization,
    otherProducts,
  } = data.page.frontmatter;

  const imageSizes = data.imageSizes.edges;

  return (
    <main className={styles.homePage}>
      <section className={styles.animation}>
        <h1 className={`hero ${styles.centered}`}>{onTopOfAnimation.title}</h1>
        <p className={`heroSubtitle ${styles.centered}`}>
          {onTopOfAnimation.subtitle}
        </p>
        <button className="buttonLarge">Contact us</button>
      </section>

      <section className={styles.transition}>
        <div className={styles.socialMedia}>
          <ul>
            <li>
              <p className="bodyLarge">Follow us</p>
            </li>
            <li>
              <OutboundLink
                href="https://www.linkedin.com/company/oslo-market-solutions-as/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                href="https://www.facebook.com/oslomarketsolutions/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={['fab', 'facebook']} />
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                href="https://medium.com/shark-bytes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={['fab', 'medium']} />
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                href="https://github.com/oslomarketsolutions"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={['fab', 'github-square']} />
              </OutboundLink>
            </li>
          </ul>
        </div>
        <div className={styles.first}>
          <p className="bodyLarge">
            <span className={styles.big}>
              {transitionalElement.numbersAndText.companiesNumber}
              <span className={styles.blueText}>+</span>
            </span>
            {` ${transitionalElement.numbersAndText.companiesText}`}
          </p>
        </div>
        <div className={styles.second}>
          <p className="bodyLarge">
            <span className={styles.big}>
              {transitionalElement.numbersAndText.usersNumber}
              <span className={styles.blueText}>+</span>
            </span>
            {` ${transitionalElement.numbersAndText.usersText}`}
          </p>
        </div>
        <div className={styles.third}>
          <p className="bodyLarge">{transitionalElement.numbersAndText.text}</p>
        </div>
        <div className={styles.customerLogos}>
          <Slider logos={transitionalElement.customerLogos} />
        </div>
      </section>
      <section className={styles.investorPortal}>
        <h1>{investorPortal.header}</h1>
        <p className="bodyLarge">{investorPortal.text}</p>
        {/* Need to fix 'to' */}
        <Button to="/en/products" text="Learn more" />

        <h2 className={`${styles.subHeader1} ${styles.centered}`}>
          {customization.header}
        </h2>
        <p>{customization.text}</p>
        <div className={styles.customizationCards}>
          {customization.cards &&
            customization.cards.map((customizationCard, index) => (
              <FeatureCard
                key={customizationCard.header}
                title={customizationCard.header}
                description={customizationCard.description}
                features={customizationCard.features}
                index={index}
                isDark={customizationCard.isDark}
              />
            ))}
        </div>
        <h2 className={`${styles.subHeader2} ${styles.centered}`}>
          {customization.serviceIntegrations.header}
        </h2>
        <p className={styles.centered}>
          {customization.serviceIntegrations.text}
        </p>
        <div className={styles.integrationLogos}>
          {customization.serviceIntegrations.integrationLogos &&
            customization.serviceIntegrations.integrationLogos.map(
              integrationLogo => (
                <ImageWrapper
                  key={integrationLogo.name}
                  src={integrationLogo.logo}
                  alt={integrationLogo.name}
                  sizes={findImageSizes(integrationLogo.logo, imageSizes)}
                  outerWrapperClassName={styles.imageContainer}
                />
              ),
            )}
        </div>
      </section>
      <section className={styles.arena}>
        <h1>{otherProducts.arena.header}</h1>
        <p className="bodyLarge">{otherProducts.arena.text}</p>
        {/* Need to fix 'to' */}
        <Button to="/en/products" text="Learn more" />
        <ImageWrapper
          src={otherProducts.arena.image}
          alt="Abstract arena"
          sizes={findImageSizes(otherProducts.arena.image, imageSizes)}
          outerWrapperClassName={styles.imageContainer}
        />
      </section>
      <section className={styles.irModules}>
        <h1>{otherProducts.irModules.header}</h1>
        <p className="bodyLarge">{otherProducts.irModules.text}</p>
        {/* Need to fix 'to' */}
        <Button to="/en/products" text="Learn more" />
        <ImageWrapper
          src={otherProducts.arena.image}
          alt="Abstract IR Modules"
          sizes={findImageSizes(otherProducts.arena.image, imageSizes)}
          outerWrapperClassName={styles.imageContainer}
        />
      </section>
      {/* <section className={styles.animation}>
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
      </section> */}
    </main>
  );
};

IndexPageTemplate.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
    imageSizes: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object),
    }),
  }),
};

export default IndexPageTemplate;
