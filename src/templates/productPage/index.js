import React from 'react';
import PropTypes from 'prop-types';
// import scrollIntoView from 'scroll-into-view-if-needed';
// import Observer from 'react-intersection-observer';
// import classNames from 'classnames';
import ImageWrapper from '../../components/imageWrapper';
import { findImageSizes } from '../../utils/helperFunctions';
import styles from './productPage.module.scss';
// import LinkCard from '../../components/linkCard';
// import ProductCard from '../../components/productCard';
// import oneYearGraph from '../../components/oneYearGraph';

/* if (typeof window !== `undefined`) {
  // eslint-disable-next-line
  require('intersection-observer');
} */

export const ProductPageTemplate = ({
  linkCardsSection,
  investorPortal,
  standardProducts,
  services,
  imageSizes,
}) => {
  const ting = 'ting';

  return (
    <main className={styles.productPage}>
      <section className={styles.linkCardsSection}>
        <h1>hei</h1>
        <div>{ting}</div>
      </section>
      <section className={styles.investorPortal}>
        <h1>{investorPortal.sectionHeader.title}</h1>
      </section>
      <section className={styles.standardProducts}>
        <h1>{standardProducts.sectionHeader.title}</h1>
      </section>
      <section className={styles.services}>
        <h1>{services.sectionHeader.title}</h1>
        <ImageWrapper
          key={services.feedAPI.title}
          src={services.feedAPI.image}
          alt={services.feedAPI.title}
          sizes={findImageSizes(services.feedAPI.image, imageSizes)}
          outerWrapperClassName={styles.imageContainer}
        />
      </section>
    </main>
  );
};

ProductPageTemplate.propTypes = {
  linkCardsSection: PropTypes.shape({}),
  investorPortal: PropTypes.shape({}),
  standardProducts: PropTypes.shape({}),
  services: PropTypes.shape({}),
  imageSizes: PropTypes.shape({}),
};

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
            title
            description
            isDark
          }
        }
        investorPortal {
          sectionHeader {
            title
            subTitle
            text
          }
          marketData {
            title
            text
            image
          }
          trading {
            title
            text
            image
          }
          onlinePortfolio {
            overline
            title
            text
            image
          }
          serviceIntegrations {
            title
            text
            integrationsLogos {
              logo
              name
            }
          }
        }
        standardProducts {
          sectionHeader {
            title
            subTitle
            text
          }
          arena {
            title
            image
            text
          }
          irModules {
            title
            image
            text
          }
        }
        services {
          sectionHeader {
            title
            subTitle
            text
          }
          feedAPI {
            title
            image
            text
          }
          omsComponents {
            title
            image
            text
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
