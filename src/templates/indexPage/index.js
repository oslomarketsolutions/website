import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import styles from './indexPage.module.scss';
import FeatureCard from '../../components/featureCard';
import Slider from '../../components/slider/index';
import { findImageSizes } from '../../utils/helperFunctions';
import ImageWrapper from '../../components/imageWrapper';
import Button from '../../components/button/index';

const IndexPageTemplate = ({ language, data }) => {
  const {
    hero,
    transitionalElement,
    investorPortal,
    customization,
    otherProducts,
  } = data.page.frontmatter;

  const imageSizes = data.imageSizes.edges;
  const parsedPath = /^\/(\w\w)/.exec(language);
  const strippedLanguage = parsedPath && parsedPath[1];

  return (
    <main className={styles.homePage}>
      <section className={styles.animation}>
        <h1 className={`hero ${styles.centered}`}>{hero.title}</h1>
        <p className={`heroSubtitle ${styles.centered}`}>{hero.subtitle}</p>
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
            <span className="temp">
              {transitionalElement.numbersAndText.companiesNumber}
              <span className={styles.blueText}>+</span>
            </span>
            {` ${transitionalElement.numbersAndText.companiesText}`}
          </p>
        </div>
        <div className={styles.second}>
          <p className="bodyLarge">
            <span className="temp">
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
        <Button to={`/${strippedLanguage}/products`} text="Learn more" />

        <h2 className={`${styles.subHeader1} ${styles.centered}`}>
          {customization.header}
        </h2>
        <p>{customization.text}</p>
        <div className={styles.customizationCards}>
          {customization.cards.map((customizationCard, index) => (
            <FeatureCard
              key={customizationCard.header}
              title={customizationCard.header}
              description={customizationCard.description}
              features={customizationCard.features}
              index={index}
              to={`/${strippedLanguage}/products`}
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
          {customization.serviceIntegrations.integrationLogos.map(
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
        <Button to={`/${strippedLanguage}/products`} text="Learn more" />
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
        <Button to={`/${strippedLanguage}/products`} text="Learn more" />
        <ImageWrapper
          src={otherProducts.arena.image}
          alt="Abstract IR Modules"
          sizes={findImageSizes(otherProducts.arena.image, imageSizes)}
          outerWrapperClassName={styles.imageContainer}
        />
      </section>
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
  language: PropTypes.string,
};

export default IndexPageTemplate;
