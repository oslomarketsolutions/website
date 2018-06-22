import React from 'react';
import PropTypes from 'prop-types';
import styles from './productPage.module.scss';
import FeatureCard from '../../components/featureCard';

export const ProductPageTemplate = ({ title, description, featureCards }) => (
  <article className={styles.container}>
    <section className={styles.intro}>
      <h2>{title}</h2>
    </section>

    <section className={styles.description}>
      <p>{description}</p>
    </section>

    <section className={styles.featureCards}>
      {featureCards.map(featureCard => {
        const {
          title: featureCardTitle,
          imageTest: featureCardImage,
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
  title: PropTypes.string,
  description: PropTypes.string,
  featureCards: PropTypes.arrayOf(PropTypes.object),
};

const ProductPage = ({ data }) => {
  console.log(data);
  const page = data.page.frontmatter;
  const { edges: featureCards } = data.featureCards;

  return (
    <ProductPageTemplate
      title={page.title}
      description={page.description}
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
        title
        description
      }
    }

    featureCards: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: $featureRegex } }
    ) {
      edges {
        node {
          frontmatter {
            title
            imageTest {
              childImageSharp {
                resolutions(width: 620) {
                  ...GatsbyImageSharpResolutions
                }
              }
            }
            description
            features
          }
        }
      }
    }
  }
`;
