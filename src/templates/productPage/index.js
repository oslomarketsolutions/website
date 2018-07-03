import React from 'react';
import PropTypes from 'prop-types';
import styles from './productPage.module.scss';

export const ProductPageTemplate = ({ intro, investorPortal, products }) => (
  <article className={styles.container}>
    <section className={styles.intro}>
      <h2>{intro.title}</h2>
      <div className={styles.links}>
        <a href={`#${investorPortal.title}`}>{investorPortal.title}</a>
        {products.map(product => (
          <a href={`#${product.title}`}>{product.title}</a>
        ))}
      </div>
    </section>

    <section className={styles.investorPortal}>
      <div className={styles.investor}>
        <h3>{investorPortal.title}</h3>
        <p>{investorPortal.description}</p>
        <img src={investorPortal.image} alt={investorPortal.title} />
      </div>
      {investorPortal.features &&
        investorPortal.features.map(feature => (
          <div className={styles.features}>
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      <div className={styles.investorContact}>
        <h3>Contact us today to get more info about our traders!</h3>
        <button>Contact</button>
      </div>
    </section>

    <section className={styles.products}>
      {products &&
        products.map(product => (
          <article>
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <img src={product.image} alt={product.title} />
          </article>
        ))}
    </section>
  </article>
);

ProductPageTemplate.propTypes = {
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
        image: PropTypes.string,
      }),
    ),
  }),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
};

const ProductPage = ({ data }) => {
  const page = data.page.frontmatter;
  const { edges: featureCards } = data.featureCards;
  return (
    <ProductPageTemplate
      intro={page.intro}
      investorPortal={page.investorPortal}
      products={page.products}
      featureCards={featureCards}
    />
  );
};

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ProductPage;

export const productPageQuery = graphql`
  query ProductPage($id: String!, $featureRegex: String!) {
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
          image
          features {
            title
            image
            description
          }
        }
        products {
          title
          description
        }
      }
    }
  }
`;
