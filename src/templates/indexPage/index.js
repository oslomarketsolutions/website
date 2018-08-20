import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OutboundLink } from 'react-ga';
import styles from './indexPage.module.scss';
import FeatureCard from '../../components/featureCard';
import Slider from '../../components/slider/index';
import { findImageSizes } from '../../utils/helperFunctions';
import ImageWrapper from '../../components/imageWrapper';
import Button from '../../components/button/index';
import BigButton from '../../components/bigButton/index';
import ServiceIntegrations from '../../components/serviceIntegrations';
import getLanguage from '../../utils/language';

const IndexPageTemplate = ({ location, data }) => {
  const {
    hero,
    transitionalElement,
    investorPortal,
    customization,
    otherProducts,
  } = data.page.frontmatter;

  const imageSizes = data.imageSizes.edges;
  const language = getLanguage(location.pathname);

  return (
    <main className={styles.homePage}>
      <section className={styles.animation}>
        <h1 className={`hero ${styles.centered}`}>{hero.title}</h1>
        <p className={`heroSubtitle ${styles.centered}`}>{hero.subtitle}</p>
        <BigButton to="mailto:info@oms.no" text="Contact us" />
      </section>

      <section className={styles.transition}>
        <div className={styles.socialMedia}>
          <ul>
            <li>
              <p className="bodyLarge">Follow us</p>
            </li>
            <li>
              <OutboundLink
                to="https://www.linkedin.com/company/oslo-market-solutions-as/"
                eventLabel="LinkedIn from homepage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                to="https://www.facebook.com/oslomarketsolutions/"
                eventLabel="Facebook from homepage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={['fab', 'facebook']} />
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                to="https://medium.com/shark-bytes"
                eventLabel="Shark Bytes Blog from homepage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={['fab', 'medium']} />
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                eventLabel="Github from homepage"
                to="https://github.com/oslomarketsolutions"
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
        <Button to={`/${language}/products`} text="Learn more" useArrow />
        <div className={styles.investorPortalImagesWrapper}>
          {investorPortal.investorPortalImages &&
            investorPortal.investorPortalImages.map(investorPortalImage => (
              <ImageWrapper
                key={investorPortalImage.name}
                src={investorPortalImage.image}
                alt={investorPortalImage.name}
                sizes={findImageSizes(investorPortalImage.image, imageSizes)}
                outerWrapperClassName={styles.imageContainer}
              />
            ))}
        </div>
        <div className={styles.tickerTape}>
          <ImageWrapper
            src="/img/tickertape.png"
            alt="Abstract investorportal"
            sizes={findImageSizes('/img/tickertape.png', imageSizes)}
            outerWrapperClassName={styles.imageContainer}
          />
        </div>

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
                to={`/${language}/products`}
                isDark={customizationCard.isDark}
              />
            ))}
        </div>
        <ServiceIntegrations
          header={customization.serviceIntegrations.header}
          text={customization.serviceIntegrations.text}
          logos={customization.serviceIntegrations.integrationLogos}
          imageSizes={imageSizes}
        />
      </section>
      <section className={styles.arena}>
        <h1>{otherProducts.arena.header}</h1>
        <p className="bodyLarge">{otherProducts.arena.text}</p>
        <Button to={`/${language}/products`} text="Learn more" useArrow />
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
        <Button to={`/${language}/products`} text="Learn more" useArrow />
        <ImageWrapper
          src={otherProducts.irModules.image}
          alt="Abstract IR Modules"
          sizes={findImageSizes(otherProducts.irModules.image, imageSizes)}
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
  location: PropTypes.shape({ pathname: PropTypes.string }),
};

export default IndexPageTemplate;
