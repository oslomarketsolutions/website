import React, { Component } from 'react';
import PropTypes from 'prop-types';
import scrollIntoView from 'scroll-into-view-if-needed';
import Observer from 'react-intersection-observer';
import classNames from 'classnames';
import ImageWrapper from '../../components/imageWrapper';
import {
  findImageSizes,
  findImageResolutions,
} from '../../utils/helperFunctions';
import styles from './productPage.module.scss';
import LinkCard from '../../components/linkCard';
import ProductCard from '../../components/productCard';
import oneYearGraph from '../../components/oneYearGraph';

if (typeof window !== `undefined`) {
  // eslint-disable-next-line
  require('intersection-observer');
}

export class ProductPageTemplate extends Component {
  static propTypes = {
    intro: PropTypes.shape({
      title: PropTypes.string,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
          title: PropTypes.string,
        }),
      ),
    }),
    investorPortal: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      features: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
          title: PropTypes.string,
          image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        }),
      ),
      services: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
          title: PropTypes.string,
          image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        }),
      ),
    }),
    products: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string,
        title: PropTypes.string,
      }),
    ),
    imageSizes: PropTypes.arrayOf(PropTypes.object),
    imageResolutions: PropTypes.arrayOf(PropTypes.object),
  };

  scrollToRef = ref => {
    scrollIntoView(this[ref], {
      behavior: 'smooth',
      scrollMode: 'always',
      block: 'start',
      inline: 'start',
    });
  };

  render() {
    const {
      intro,
      investorPortal,
      products,
      imageSizes,
      imageResolutions,
      services,
    } = this.props;

    const linkCards = (stickyMenu, inView) => (
      <div
        className={classNames({
          [styles.hidden]: stickyMenu && inView,
          [styles.stickyMenu]: stickyMenu && !inView,
          [styles.notStickyMenu]: !stickyMenu,
        })}
      >
        <LinkCard
          product={investorPortal}
          onClickFunction={this.scrollToRef}
          sticky={stickyMenu}
        />
        {products &&
          products.map(product => (
            <LinkCard
              key={product.title}
              product={product}
              onClickFunction={this.scrollToRef}
              sticky={stickyMenu}
              imageResolution={findImageResolutions(
                investorPortal.image,
                imageResolutions,
              )}
            />
          ))}
      </div>
    );

    return (
      <main>
        <div className={styles.container}>
          <Observer>
            {({ inView, ref }) => (
              <section className={styles.intro} ref={ref}>
                <h2>{intro.title}</h2>
                {// Sticky link bar
                linkCards(true, inView)}
                {// Intro cards
                linkCards(false, inView)}
              </section>
            )}
          </Observer>

          {oneYearGraph()}
          <section
            ref={section => {
              this[investorPortal.title] = section;
            }}
            className={styles.investorPortal}
          >
            <div className={styles.investorIntro}>
              <h2>{investorPortal.title}</h2>
              <p>{investorPortal.description}</p>
            </div>
            <div className={styles.cardContainer}>
              {investorPortal.features &&
                investorPortal.features.map(feature => (
                  <div className={styles.feature}>
                    <ProductCard
                      product={feature}
                      sizes={findImageSizes(feature.image, imageSizes)}
                    />
                  </div>
                ))}
            </div>
          </section>

          <section className={styles.productsContainer}>
            <h2>Products</h2>
            {products &&
              products.map(product => (
                <div
                  key={product.title}
                  className={styles.product}
                  ref={card => {
                    this[product.title] = card;
                  }}
                >
                  <ProductCard
                    product={product}
                    sizes={findImageSizes(product.image, imageSizes)}
                  />
                </div>
              ))}
          </section>

          <section className={styles.servicesContainer}>
            <h2>Services</h2>
            {services &&
              services.map(product => (
                <div
                  key={product.title}
                  className={styles.product}
                  ref={card => {
                    this[product.title] = card;
                  }}
                >
                  <ProductCard
                    product={product}
                    sizes={findImageSizes(product.image, imageSizes)}
                  />
                </div>
              ))}
          </section>
        </div>
      </main>
    );
  }
}

const ProductPage = ({ data }) => {
  const page = data.page.frontmatter;
  const imageSizes = data.imageSizes.edges;
  const imageResolutions = data.imageResolutions.edges;
  return (
    <ProductPageTemplate
      intro={page.intro}
      investorPortal={page.investorPortal}
      products={page.products}
      imageSizes={imageSizes}
      imageResolutions={imageResolutions}
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
        intro {
          title
          links {
            title
            text
          }
        }
        investorPortal {
          title
          description
          features {
            title
            image
            description
          }
        }
        products {
          title
          description
          image
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

    imageResolutions: allFile(
      filter: { absolutePath: { regex: "/static/img/" } }
    ) {
      edges {
        node {
          relativePath
          childImageSharp {
            resolutions(width: 150, height: 100) {
              ...GatsbyImageSharpResolutions
            }
          }
        }
      }
    }
  }
`;
