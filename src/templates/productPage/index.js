import React from 'react';
import PropTypes from 'prop-types';
import styles from './productPage.module.scss';
import FeatureCard from '../../components/featureCard';

export const ProductPageTemplate = ({
  intro,
  investorPortal,
  products,
  featureCards,
}) => (
  <article className={styles.container}>
    <section className={styles.intro}>
      <h2>{intro.title}</h2>
      <div className={styles.links}>
        {intro.links &&
          intro.links.map(link => <a href={link.title}>{link.title}</a>)}
      </div>
    </section>

    <section className={styles.investorPortal}>
      <h3>{investorPortal.title}</h3>
      <p>{investorPortal.description}</p>
      {investorPortal.features &&
        investorPortal.features.map(feature => (
          <div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
    </section>

    <section className={styles.products}>
      {products &&
        products.map(product => (
          <article>
            <h3>{product.title}</h3>
          </article>
        ))}
    </section>

    <section className={styles.featureCards}>
      {featureCards &&
        featureCards.map(featureCard => {
          const {
            title: featureCardTitle,
            image: featureCardImage,
            description: featureCardDescription,
            features: featureCardFeatures,
            link: featureCardLink,
          } = featureCard.node.frontmatter;
          return (
            <FeatureCard
              title={featureCardTitle}
              image={featureCardImage}
              description={featureCardDescription}
              features={featureCardFeatures}
              link={featureCardLink}
              key={featureCardTitle}
            />
          );
        })}
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
  featureCards: PropTypes.arrayOf(PropTypes.object),
};

const ProductPage = ({ data }) => {
  const page = data.page.frontmatter;
  const { edges: featureCards } = data.featureCards;
  console.log(data);

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

    featureCards: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: $featureRegex } }
    ) {
      edges {
        node {
          frontmatter {
            title
            image
            description
            features
          }
        }
      }
    }
  }
`;
