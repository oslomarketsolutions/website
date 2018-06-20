import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import FeatureCard from '../components/featureCard';

export const ProductPageTemplate = ({ title, description }) => (
  <article className={styles.container}>
    <section className={styles.intro}>
      <h2>{title}</h2>
    </section>

    <section className={styles.description}>
      <p>{description}</p>
    </section>

    <section className={styles.featureCards}>
      <FeatureCard
        title="Marked data feeds"
        image="/img/products-full-width.jpg"
        description="Oslo Market Solutions offer cost-efficient access to global market data with high quality through our feed delivery."
        features={[
          'Real time',
          'Historic data',
          'Top shareholders',
          'Real time',
          'Historic data',
          'Top shareholders',
        ]}
      />
      <FeatureCard
        title="Marked data feeds"
        image="/img/products-full-width.jpg"
        description="Oslo Market Solutions offer cost-efficient access to global market data with high quality through our feed delivery."
        features={[
          'Real time',
          'Historic data',
          'Top shareholders',
          'Real time',
          'Historic data',
          'Top shareholders',
        ]}
      />
      <FeatureCard
        title="Marked data feeds"
        image="/img/products-full-width.jpg"
        description="Oslo Market Solutions offer cost-efficient access to global market data with high quality through our feed delivery."
        features={[
          'Real time',
          'Historic data',
          'Top shareholders',
          'Real time',
          'Historic data',
          'Top shareholders',
        ]}
      />
      <FeatureCard
        title="Marked data feeds"
        image="/img/products-full-width.jpg"
        description="Oslo Market Solutions offer cost-efficient access to global market data with high quality through our feed delivery."
        features={[
          'Real time',
          'Historic data',
          'Top shareholders',
          'Real time',
          'Historic data',
          'Top shareholders',
        ]}
      />
      <FeatureCard
        title="Marked data feeds"
        image="/img/products-full-width.jpg"
        description="Oslo Market Solutions offer cost-efficient access to global market data with high quality through our feed delivery."
        features={[
          'Real time',
          'Historic data',
          'Top shareholders',
          'Real time',
          'Historic data',
          'Top shareholders',
        ]}
      />
    </section>
  </article>
);

ProductPageTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <ProductPageTemplate
      title={frontmatter.title}
      description={frontmatter.description}
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
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image
        heading
        description
        intro {
          blurbs {
            image
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image
          }
          image2 {
            alt
            image
          }
          image3 {
            alt
            image
          }
        }
        testimonials {
          author
          quote
        }
        full_image
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`;
