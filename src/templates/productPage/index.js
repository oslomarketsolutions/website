import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import scrollIntoView from 'scroll-into-view-if-needed';
import ImageWrapper from '../../components/imageWrapper';
import { findImageSizes } from '../../utils/helperFunctions';
import styles from './productPage.module.scss';
import SectionHeader from '../../components/sectionHeader/index';
import Button from '../../components/button/index';
import LinkCard from '../../components/linkCard';
import ServiceIntegrations from '../../components/serviceIntegrations/index';

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
    scrollIntoView(this[ref], {
      behavior: 'smooth',
      scrollMode: 'always',
      block: 'start',
      inline: 'start',
    });
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
                  header={linkCard.header}
                  description={linkCard.description}
                  isDark={linkCard.isDark}
                  onClickFunction={this.scrollToRef}
                />
              ))}
          </nav>
        </section>
        <section
          className={styles.investorPortal}
          id={investorPortal.sectionHeader.header}
          ref={investorPortalSection => {
            this[investorPortal.sectionHeader.header] = investorPortalSection;
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
            <ImageWrapper
              key={investorPortal.onlinePortfolio.header}
              src={investorPortal.onlinePortfolio.image}
              alt={investorPortal.onlinePortfolio.header}
              sizes={findImageSizes(
                investorPortal.onlinePortfolio.image,
                imageSizes,
              )}
              outerWrapperClassName={styles.imageContainer}
            />
          </section>
          <section className={styles.trading}>
            <p className={classNames('overline', styles.overline)}>
              {investorPortal.trading.overline}
            </p>
            <h2>{investorPortal.trading.header}</h2>
            <p className="bodyLarge">{investorPortal.trading.text}</p>
            <ImageWrapper
              key={investorPortal.trading.header}
              src={investorPortal.trading.image}
              alt={investorPortal.trading.header}
              sizes={findImageSizes(investorPortal.trading.image, imageSizes)}
              outerWrapperClassName={styles.imageContainer}
            />
          </section>
          <section className={styles.marketData}>
            <p className={classNames('overline', styles.overline)}>
              {investorPortal.marketData.overline}
            </p>
            <h2>{investorPortal.marketData.header}</h2>
            <p className="bodyLarge">{investorPortal.marketData.text}</p>
            <ImageWrapper
              key={investorPortal.marketData.header}
              src={investorPortal.marketData.image}
              alt={investorPortal.marketData.header}
              sizes={findImageSizes(
                investorPortal.marketData.image,
                imageSizes,
              )}
              outerWrapperClassName={styles.imageContainer}
            />
          </section>
          <ServiceIntegrations
            header={investorPortal.serviceIntegrations.header}
            text={investorPortal.serviceIntegrations.text}
            logos={investorPortal.serviceIntegrations.integrationsLogos}
            imageSizes={imageSizes}
          />
        </section>
        <section className={styles.standardProducts}>
          <SectionHeader
            header={standardProducts.sectionHeader.header}
            subHeader={standardProducts.sectionHeader.subHeader}
            text={standardProducts.sectionHeader.text}
          />
          <section
            className={styles.arena}
            id={standardProducts.arena.header}
            ref={arenaSection => {
              this[standardProducts.arena.header] = arenaSection;
            }}
          >
            <h2>{standardProducts.arena.header}</h2>
            <p className="bodyLarge">{standardProducts.arena.text}</p>
            <Button
              to="mailto:info@oms.no"
              text={standardProducts.arena.buttonText}
              outBound
            />
            <ImageWrapper
              key={standardProducts.arena.header}
              src={standardProducts.arena.image}
              alt={standardProducts.arena.header}
              sizes={findImageSizes(standardProducts.arena.image, imageSizes)}
              outerWrapperClassName={styles.imageContainer}
            />
          </section>
          <section
            className={styles.irModules}
            id={standardProducts.irModules.header}
            ref={irModulesSection => {
              this[standardProducts.irModules.header] = irModulesSection;
            }}
          >
            <h2>{standardProducts.irModules.header}</h2>
            <p className="bodyLarge">{standardProducts.irModules.text}</p>
            <Button
              to="mailto:info@oms.no"
              text={standardProducts.irModules.buttonText}
              outBound
            />
            <ImageWrapper
              key={standardProducts.irModules.header}
              src={standardProducts.irModules.image}
              alt={standardProducts.irModules.header}
              sizes={findImageSizes(
                standardProducts.irModules.image,
                imageSizes,
              )}
              outerWrapperClassName={styles.imageContainer}
            />
          </section>
        </section>
        <section className={styles.services}>
          <SectionHeader
            header={services.sectionHeader.header}
            subHeader={services.sectionHeader.subHeader}
            text={services.sectionHeader.text}
          />
          <section
            className={styles.feedAPI}
            id={services.feedAPI.header}
            ref={feedAPISection => {
              this[services.feedAPI.header] = feedAPISection;
            }}
          >
            <h2>{services.feedAPI.header}</h2>
            <p className="bodyLarge">{services.feedAPI.text}</p>
            <Button
              to="mailto:info@oms.no"
              text={services.feedAPI.buttonText}
              outBound
            />
            <ImageWrapper
              key={services.feedAPI.header}
              src={services.feedAPI.image}
              alt={services.feedAPI.header}
              sizes={findImageSizes(services.feedAPI.image, imageSizes)}
              outerWrapperClassName={styles.imageContainer}
            />
          </section>
          <section
            className={styles.omsComponents}
            id={services.omsComponents.header}
            ref={omsComponentsSection => {
              this[services.omsComponents.header] = omsComponentsSection;
            }}
          >
            <h2>{services.omsComponents.header}</h2>
            <p className="bodyLarge">{services.omsComponents.text}</p>
            <Button
              to="mailto:info@oms.no"
              text={services.omsComponents.buttonText}
              outBound
            />
            <ImageWrapper
              key={services.omsComponents.header}
              src={services.omsComponents.image}
              alt={services.omsComponents.header}
              sizes={findImageSizes(services.omsComponents.image, imageSizes)}
              outerWrapperClassName={styles.imageContainer}
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
            icon
            header
            description
            isDark
          }
        }
        investorPortal {
          sectionHeader {
            header
            subHeader
            text
          }
          marketData {
            overline
            header
            text
            image
          }
          trading {
            overline
            header
            text
            image
          }
          onlinePortfolio {
            overline
            header
            text
            image
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
            header
            image
            text
            buttonText
          }
          irModules {
            header
            image
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
            header
            image
            text
            buttonText
          }
          omsComponents {
            header
            image
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
