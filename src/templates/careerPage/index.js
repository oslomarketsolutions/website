import React from 'react';
import PropTypes from 'prop-types';
import PerkCard from '../../components/perkCard';
import styles from './careerPage.module.scss';
import { findImageSizes } from '../../utils/helperFunctions';
import ImageWrapper from '../../components/imageWrapper';

export const CareerPageTemplate = ({
  hero,
  about,
  perks,
  positions,
  imageSizes,
}) => (
  <main className={styles.careerPage}>
    <section className={styles.hero}>
      <h1>{hero.title}</h1>
      <p className="bodyLarge">{hero.text}</p>
      <ImageWrapper
        alt={hero.backgroundImageAlt}
        src={hero.backgroundImage}
        outerWrapperClassName={styles.backgroundImage}
        sizes={findImageSizes(hero.backgroundImage, imageSizes)}
      />
    </section>
    <section className={styles.about}>
      <p className="overline">{about.section}</p>
      <h2>{about.header}</h2>
      <p>{about.text}</p>
    </section>
    <section className={styles.perks}>
      <p className="overline">{perks.section}</p>
      <h2>{perks.header}</h2>
      <div className={styles.perkCardContainer}>
        {perks.perkCards.map(perkCard => (
          <PerkCard
            key={perkCard.perkTitle}
            title={perkCard.perkTitle}
            text={perkCard.text}
          />
        ))}
      </div>
    </section>
    <section className={styles.positions}>
      <h2>{positions.header}</h2>
      <p className="subtitle">{positions.text}</p>
      <iframe
        title="Job Vacancies"
        src="//delta.hr-manager.net/Vacancies/List.aspx?customer=osloborsvps&amp;uiculture=no&amp;culture=no"
      />
    </section>
  </main>
);

CareerPageTemplate.propTypes = {
  hero: PropTypes.shape({}),
  about: PropTypes.shape({}),
  perks: PropTypes.shape({}),
  positions: PropTypes.shape({}),
  imageSizes: PropTypes.arrayOf(PropTypes.object),
};

const CareerPage = ({ data }) => {
  const { markdownRemark: post } = data;
  const imageSizes = data.imageSizes.edges;

  return (
    <CareerPageTemplate
      hero={post.frontmatter.hero}
      about={post.frontmatter.about}
      perks={post.frontmatter.perks}
      positions={post.frontmatter.positions}
      imageSizes={imageSizes}
    />
  );
};

CareerPage.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default CareerPage;

export const careerPageQuery = graphql`
  query CareerPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        hero {
          title
          text
          backgroundImage
          backgroundImageAlt
        }
        about {
          section
          header
          text
        }
        perks {
          section
          header
          perkCards {
            perkTitle
            text
            icon
          }
        }
        positions {
          header
          text
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
