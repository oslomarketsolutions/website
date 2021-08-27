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
}) => {
  const redirect = () => {
    window.location.assign(
      'https://mycareer.infrontfinance.com/accueil.aspx?LCID=2057',
    );
  };

  return (
    <main className={styles.careerPage}>
      <section className={styles.hero}>
        <div className={styles.textContainer}>
          <h1>{hero.title}</h1>
          <p className="heroSubtitle">{hero.text}</p>
        </div>
        <ImageWrapper
          alt={hero.backgroundImageAlt}
          src={hero.backgroundImage}
          outerWrapperClassName={styles.backgroundImage}
          sizes={findImageSizes(hero.backgroundImage, imageSizes)}
        />
      </section>
      <section className={styles.about}>
        <div className={styles.textContainer}>
          <p className="overline">{about.section}</p>
          <h2>{about.header}</h2>
          <p className="bodyLarge">{about.text}</p>
        </div>
      </section>
      <section className={styles.perks}>
        <div className={styles.textContainer}>
          <p className="overline">{perks.section}</p>
          <h2>{perks.header}</h2>
        </div>
        <div className={styles.perkCardContainer}>
          {perks.perkCards &&
            perks.perkCards.map(perkCard => (
              <PerkCard
                key={perkCard.perkTitle}
                title={perkCard.perkTitle}
                text={perkCard.text}
                icon={perkCard.icon}
              />
            ))}
        </div>
      </section>
      <section className={styles.positions}>
        <div className={styles.textContainer}>
          <h2>{positions.header}</h2>
          <p className="subtitle">{positions.text}</p>
        </div>
        <div className={styles.iframeAlt}>
          <button
            className={`textButton ${styles.iframeButton}`}
            onClick={redirect}
          >
            {positions.buttonText}
          </button>
        </div>
      </section>
    </main>
  );
};

CareerPageTemplate.propTypes = {
  hero: PropTypes.shape({}),
  about: PropTypes.shape({}),
  perks: PropTypes.shape({}),
  positions: PropTypes.shape({}),
  imageSizes: PropTypes.arrayOf(PropTypes.object),
};

const CareerPage = ({ data, handleCookieChanges, googleAnalyticsIsActive }) => {
  const { markdownRemark: page } = data;
  const imageSizes = data.imageSizes.edges;
  return (
    <CareerPageTemplate
      hero={page.frontmatter.hero}
      about={page.frontmatter.about}
      perks={page.frontmatter.perks}
      positions={page.frontmatter.positions}
      imageSizes={imageSizes}
      handleCookieChanges={handleCookieChanges}
      googleAnalyticsIsActive={googleAnalyticsIsActive}
    />
  );
};

CareerPage.propTypes = {
  data: PropTypes.shape({}).isRequired,
  handleCookieChanges: PropTypes.func,
  googleAnalyticsIsActive: PropTypes.bool,
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
          buttonText
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
