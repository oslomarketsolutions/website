import React from 'react';
import PropTypes from 'prop-types';
import styles from './newsPage.module.scss';
import { findImageSizes } from '../../utils/helperFunctions';
import ImageWrapper from '../../components/imageWrapper';
import { HTMLContent } from '../../components/content';

export const NewsPageTemplate = ({
  title,
  date,
  image,
  imageAlt,
  content,
  imageSizes,
}) => (
  <main>
    <div className={styles.newsPage}>
      <section className={styles.intro}>
        <h1>{title}</h1>
        <p>{date}</p>
        {// Only render image if provided
        // Some news might not need an image
        image && (
          <ImageWrapper
            alt={imageAlt}
            src={image}
            outerWrapperClassName={styles.imageContainer}
            sizes={findImageSizes(image, imageSizes)}
          />
        )}
      </section>
      <section className={styles.content}>
        <HTMLContent content={content} />
      </section>
    </div>
  </main>
);

NewsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  date: PropTypes.string,
  content: PropTypes.string,
  imageSizes: PropTypes.arrayOf(PropTypes.object),
};

const NewsPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  const imageSizes = data.imageSizes.edges;

  return (
    <NewsPageTemplate
      title={frontmatter.title}
      image={frontmatter.image}
      date={frontmatter.date}
      content={html}
      imageSizes={imageSizes}
    />
  );
};

NewsPage.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default NewsPage;

export const newsPageQuery = graphql`
  query NewsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image
        date
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
