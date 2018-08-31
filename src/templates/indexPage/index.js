import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OutboundLink } from 'react-ga';
import lottie from 'lottie-web';
import styles from './indexPage.module.scss';
import FeatureCard from '../../components/featureCard';
import Slider from '../../components/slider/index';
import Button from '../../components/button/index';
import BigButton from '../../components/bigButton/index';
import ServiceIntegrations from '../../components/serviceIntegrations';
import getLanguage from '../../utils/language';
import Images from '../../components/images';
import animationFull from '../../../static/data.json';

export default class IndexPageTemplate extends Component {
  static propTypes = {
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

  componentDidMount() {
    if (this.element) {
      this.animation = lottie.loadAnimation({
        container: this.element,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationFull,
      });
      this.animation.playSegments([[-25, 130], [131, 340]], true);
    }
  }

  render() {
    const {
      hero,
      transitionalElement,
      investorPortal,
      customization,
      otherProducts,
    } = this.props.data.page.frontmatter;

    const imageSizes = this.props.data.imageSizes.edges;
    let language = 'en';

    // This stops CMS from crashing
    if (this.props.location) {
      language = getLanguage(this.props.location.pathname);
    }

    return (
      <main className={styles.homePage}>
        <section className={styles.animation}>
          <h1 className="hero">{hero.title}</h1>
          <p className="heroSubtitle">{hero.subtitle}</p>
          <BigButton to="mailto:info@oms.no" text={hero.buttonText} />
          <div className={styles.animationContainer}>
            <div
              id="animation"
              ref={el => {
                this.element = el;
              }}
              className={styles.lottieDiv}
            />
          </div>
        </section>

        <section className={styles.transition}>
          <div className={styles.socialMedia}>
            <ul>
              <li>
                <p className="bodyLarge">
                  {transitionalElement.socialMediaText}
                </p>
              </li>
              <li>
                <OutboundLink
                  to="https://www.linkedin.com/company/oslo-market-solutions-as/"
                  eventLabel="LinkedIn from homepage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">Link to our LinkedIn</span>
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
                  <span className="sr-only">Link to our Facebook</span>
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
                  <span className="sr-only">Link to our Medium blog</span>
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
                  <span className="sr-only">Link to our Github</span>
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
            <p className="bodyLarge">
              {transitionalElement.numbersAndText.text}
            </p>
          </div>
          <div className={styles.customerLogos}>
            <Slider logos={transitionalElement.customerLogos} />
          </div>
        </section>
        <section className={styles.investorPortal}>
          <h1>{investorPortal.header}</h1>
          <p className="bodyLarge">{investorPortal.text}</p>
          <Button
            to={`/${language}/products/#${investorPortal.id}`}
            text={investorPortal.buttonText}
            useArrow
          />
          <div className={styles.investorPortalImagesWrapper}>
            <Images
              alt={investorPortal.header}
              outerWrapperClassName={styles.imageContainer}
              desktopSrc={investorPortal.desktopImage}
              tabletSrc={investorPortal.tabletImage}
              mobileSrc={investorPortal.mobileImage}
              sizes={imageSizes}
            />
          </div>
          <h2 className={classNames(styles.subHeader1, styles.centered)}>
            {customization.header}
          </h2>
          <p>{customization.text}</p>
          <div className={styles.customizationCards}>
            {customization.cards &&
              customization.cards.map(customizationCard => (
                <FeatureCard
                  key={customizationCard.header}
                  title={customizationCard.header}
                  description={customizationCard.description}
                  features={customizationCard.features}
                  icon={customizationCard.icon}
                  buttonText={customizationCard.buttonText}
                  to={`/${language}/products/#${customizationCard.id}`}
                  isDark={customizationCard.isDark}
                />
              ))}
          </div>
          <ServiceIntegrations
            header={customization.serviceIntegrations.header}
            text={customization.serviceIntegrations.text}
            logos={customization.serviceIntegrations.integrationsLogos}
            imageSizes={imageSizes}
          />
        </section>
        <section className={styles.irModules}>
          <h1>{otherProducts.irModules.header}</h1>
          <p className="bodyLarge">{otherProducts.irModules.text}</p>
          <Button
            to={`/${language}/products/#${otherProducts.irModules.id}`}
            text={otherProducts.irModules.buttonText}
            useArrow
          />
          <Images
            alt={otherProducts.irModules.header}
            outerWrapperClassName={styles.imageContainer}
            desktopSrc={otherProducts.irModules.desktopImage}
            tabletSrc={otherProducts.irModules.tabletImage}
            mobileSrc={otherProducts.irModules.mobileImage}
            sizes={imageSizes}
          />
        </section>
        <section className={styles.arena}>
          <h1>{otherProducts.arena.header}</h1>
          <p className="bodyLarge">{otherProducts.arena.text}</p>
          <Button
            to={`/${language}/products/#${otherProducts.arena.id}`}
            text={otherProducts.arena.buttonText}
            useArrow
          />
          <Images
            alt={otherProducts.arena.header}
            outerWrapperClassName={styles.imageContainer}
            desktopSrc={otherProducts.arena.desktopImage}
            tabletSrc={otherProducts.arena.tabletImage}
            mobileSrc={otherProducts.arena.mobileImage}
            sizes={imageSizes}
          />
        </section>
      </main>
    );
  }
}
