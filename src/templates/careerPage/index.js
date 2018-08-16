import React from 'react';
import PropTypes from 'prop-types';
import PerkCard from '../../components/perkCard';
import styles from './careerPage.module.scss';
import { getCookie } from '../../utils/cookies';
import { findImageSizes } from '../../utils/helperFunctions';
import ImageWrapper from '../../components/imageWrapper';

export const CareerPageTemplate = ({
  hero,
  about,
  perks,
  positions,
  imageSizes,
  handleCookieChanges,
}) => {
  const enableAnalytics = () => {
    handleCookieChanges(true, 'analytics');
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
          <p>{about.text}</p>
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
                icon={perkCard.icon && perkCard.icon.split(' ')}
              />
            ))}
        </div>
      </section>
      <section className={styles.positions}>
        <div className={styles.textContainer}>
          <h2>{positions.header}</h2>
          <p className="subtitle">{positions.text}</p>
        </div>
        {getCookie('setGoogleAnalyticsCookie') !== '' ? (
          <iframe
            title="Job Vacancies"
            src="//delta.hr-manager.net/Vacancies/List.aspx?customer=osloborsvps&amp;uiculture=no&amp;culture=no"
          />
        ) : (
          <div className={styles.iframeAlt}>
            <p>{positions.iframeAltText}</p>
            <button onClick={enableAnalytics}>Enable</button>
          </div>
        )}
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
  handleCookieChanges: PropTypes.func,
};

const CareerPage = ({ data, handleCookieChanges }) => {
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
    />
  );
};

CareerPage.propTypes = {
  data: PropTypes.shape({}).isRequired,
  handleCookieChanges: PropTypes.func,
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
          iframeAltText
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
