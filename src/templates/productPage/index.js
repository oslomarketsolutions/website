import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import scrollIntoView from 'scroll-into-view-if-needed';
import styles from './productPage.module.scss';
import SectionHeader from '../../components/sectionHeader/index';
import Button from '../../components/button/index';
import LinkCard from '../../components/linkCard';
import ServiceIntegrations from '../../components/serviceIntegrations/index';
import Images from '../../components/images';

export class ProductPageTemplate extends Component {
  static propTypes = {
    linkCardsSection: PropTypes.shape({}),
    investorPortal: PropTypes.shape({}),
    standardProducts: PropTypes.shape({}),
    services: PropTypes.shape({}),
    imageSizes: PropTypes.arrayOf(PropTypes.object),
  };

  scrollToRef = (event, ref) => {
    event.preventDefault();
    if (ref === 'infront') {
      window.location.assign('https://www.infrontfinance.com/');
    } else {
      scrollIntoView(this[ref], {
        behavior: 'smooth',
        scrollMode: 'always',
        block: 'start',
        inline: 'start',
      });
    }
  };

  render() {
    const {
      linkCardsSection,
      investorPortal,
      standardProducts,
      services,
      imageSizes,
    } = this.props;

    return (
      <main className={styles.productPage}>
        <section className={styles.linkCardsSection}>
          <h1 className={styles.centered}>{linkCardsSection.title}</h1>
          <nav className={styles.linkCards}>
            {linkCardsSection.linkCards &&
              linkCardsSection.linkCards.map(linkCard => (
                <LinkCard
                  key={linkCard.header}
                  icon={linkCard.icon}
                  id={linkCard.id}
                  header={linkCard.header}
                  description={linkCard.description}
                  isDark={linkCard.isDark}
                  linkText={linkCard.linkText}
                  onClickFunction={this.scrollToRef}
                />
              ))}
          </nav>
        </section>
        <section
          className={styles.investorPortal}
          id={investorPortal.id}
          ref={investorPortalSection => {
            this[investorPortal.id] = investorPortalSection;
          }}
        >
          <SectionHeader
            header={investorPortal.sectionHeader.header}
            subHeader={investorPortal.sectionHeader.subHeader}
            text={investorPortal.sectionHeader.text}
          />
          <section className={styles.onlinePortfolio}>
            <p className={classNames('overline', styles.overline)}>
              {investorPortal.onlinePortfolio.overline}
            </p>
            <h2>{investorPortal.onlinePortfolio.header}</h2>
            <p className="bodyLarge">{investorPortal.onlinePortfolio.text}</p>
            <Images
              alt={investorPortal.onlinePortfolio.header}
              outerWrapperClassName={styles.imageContainer}
              desktopSrc={investorPortal.onlinePortfolio.desktopImage}
              tabletSrc={investorPortal.onlinePortfolio.tabletImage}
              mobileSrc={investorPortal.onlinePortfolio.mobileImage}
              sizes={imageSizes}
            />
          </section>
          <section className={styles.trading}>
            <p className={classNames('overline', styles.overline)}>
              {investorPortal.trading.overline}
            </p>
            <h2>{investorPortal.trading.header}</h2>
            <p className="bodyLarge">{investorPortal.trading.text}</p>
            <Images
              alt={investorPortal.trading.header}
              outerWrapperClassName={styles.imageContainer}
              desktopSrc={investorPortal.trading.desktopImage}
              tabletSrc={investorPortal.trading.tabletImage}
              mobileSrc={investorPortal.trading.mobileImage}
              sizes={imageSizes}
            />
          </section>
          <section className={styles.marketData}>
            <p className={classNames('overline', styles.overline)}>
              {investorPortal.marketData.overline}
            </p>
            <h2>{investorPortal.marketData.header}</h2>
            <p className="bodyLarge">{investorPortal.marketData.text}</p>
            <Images
              alt={investorPortal.marketData.header}
              outerWrapperClassName={styles.imageContainer}
              desktopSrc={investorPortal.marketData.desktopImage}
              tabletSrc={investorPortal.marketData.tabletImage}
              mobileSrc={investorPortal.marketData.mobileImage}
              sizes={imageSizes}
            />
          </section>
          <ServiceIntegrations
            header={investorPortal.serviceIntegrations.header}
            text={investorPortal.serviceIntegrations.text}
            logos={investorPortal.serviceIntegrations.integrationsLogos}
            imageSizes={imageSizes}
          />
        </section>
        <section className={styles.services}>
          <SectionHeader
            header={services.sectionHeader.header}
            subHeader={services.sectionHeader.subHeader}
            text={services.sectionHeader.text}
          />
          <section
            className={styles.omsComponents}
            id={services.omsComponents.id}
            ref={omsComponentsSection => {
              this[services.omsComponents.id] = omsComponentsSection;
            }}
          >
            <h2>{services.omsComponents.header}</h2>
            <p className="bodyLarge">{services.omsComponents.text}</p>
            <Button
              to="mailto:info@oms.no"
              text={services.omsComponents.buttonText}
              outBound
            />
            <Images
              alt={services.omsComponents.header}
              outerWrapperClassName={styles.imageContainer}
              desktopSrc={services.omsComponents.desktopImage}
              tabletSrc={services.omsComponents.tabletImage}
              mobileSrc={services.omsComponents.mobileImage}
              sizes={imageSizes}
            />
          </section>
          <section
            className={styles.feedAPI}
            id={services.feedAPI.id}
            ref={feedAPISection => {
              this[services.feedAPI.id] = feedAPISection;
            }}
          >
            <h2>{services.feedAPI.header}</h2>
            <p className="bodyLarge">{services.feedAPI.text}</p>
            <Button
              to="mailto:info@oms.no"
              text={services.feedAPI.buttonText}
              outBound
            />
            <Images
              alt={services.feedAPI.header}
              outerWrapperClassName={styles.imageContainer}
              desktopSrc={services.feedAPI.desktopImage}
              tabletSrc={services.feedAPI.tabletImage}
              mobileSrc={services.feedAPI.mobileImage}
              sizes={imageSizes}
            />
          </section>
        </section>
        <section className={styles.standardProducts}>
          <SectionHeader
            header={standardProducts.sectionHeader.header}
            subHeader={standardProducts.sectionHeader.subHeader}
            text={standardProducts.sectionHeader.text}
          />
          <section
            className={styles.irModules}
            id={standardProducts.irModules.id}
            ref={irModulesSection => {
              this[standardProducts.irModules.id] = irModulesSection;
            }}
          >
            <h2>{standardProducts.irModules.header}</h2>
            <p className="bodyLarge">{standardProducts.irModules.text}</p>
            <Button
              to="mailto:info@oms.no"
              text={standardProducts.irModules.buttonText}
              outBound
            />
            <Images
              alt={standardProducts.irModules.header}
              outerWrapperClassName={styles.imageContainer}
              desktopSrc={standardProducts.irModules.desktopImage}
              tabletSrc={standardProducts.irModules.tabletImage}
              mobileSrc={standardProducts.irModules.mobileImage}
              sizes={imageSizes}
            />
          </section>
          <section
            className={styles.arena}
            id={standardProducts.arena.id}
            ref={arenaSection => {
              this[standardProducts.arena.id] = arenaSection;
            }}
          >
            <h2>{standardProducts.arena.header}</h2>
            <p className="bodyLarge">{standardProducts.arena.text}</p>
            <Button
              to="mailto:info@oms.no"
              text={standardProducts.arena.buttonText}
              outBound
            />
            <Images
              alt={standardProducts.arena.header}
              outerWrapperClassName={styles.imageContainer}
              desktopSrc={standardProducts.arena.desktopImage}
              tabletSrc={standardProducts.arena.tabletImage}
              mobileSrc={standardProducts.arena.mobileImage}
              sizes={imageSizes}
            />
          </section>
        </section>
      </main>
    );
  }
}

const ProductPage = ({ data }) => {
  const page = data.page.frontmatter;
  const imageSizes = data.imageSizes.edges;

  return (
    <ProductPageTemplate
      linkCardsSection={page.linkCardsSection}
      investorPortal={page.investorPortal}
      standardProducts={page.standardProducts}
      services={page.services}
      imageSizes={imageSizes}
    />
  );
};

export default ProductPage;

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      frontmatter {
        linkCardsSection {
          title
          linkCards {
            icon {
              mobile
              desktop
            }
            header
            description
            isDark
            linkText
            id
          }
        }
        investorPortal {
          id
          sectionHeader {
            header
            subHeader
            text
          }
          marketData {
            overline
            header
            text
            desktopImage
            tabletImage
            mobileImage
          }
          trading {
            overline
            header
            text
            desktopImage
            tabletImage
            mobileImage
          }
          onlinePortfolio {
            overline
            header
            text
            desktopImage
            tabletImage
            mobileImage
          }
          serviceIntegrations {
            header
            text
            integrationsLogos {
              logo
              name
            }
          }
        }
        standardProducts {
          sectionHeader {
            header
            subHeader
            text
          }
          arena {
            id
            header
            desktopImage
            tabletImage
            mobileImage
            text
            buttonText
          }
          irModules {
            id
            header
            desktopImage
            tabletImage
            mobileImage
            text
            buttonText
          }
        }
        services {
          sectionHeader {
            header
            subHeader
            text
          }
          feedAPI {
            id
            header
            desktopImage
            tabletImage
            mobileImage
            text
            buttonText
          }
          omsComponents {
            id
            header
            desktopImage
            tabletImage
            mobileImage
            text
            buttonText
          }
        }
      }
    }

    imageSizes: allFile(filter: { absolutePath: { regex: "/static/img/" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            sizes(maxWidth: 1440) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
