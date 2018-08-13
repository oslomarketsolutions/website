import React from 'react';
import PropTypes from 'prop-types';
import PerkCard from '../../components/perkCard';
import styles from './careerPage.module.scss';
import { findImageSizes } from '../../utils/helperFunctions';
import ImageWrapper from '../../components/imageWrapper';

let colorCounter = 0;
const color = () => {
  const colors = [
    '#fff6ae',
    '#c6b5e3',
    '#fd9e72',
    '#91e0ff',
    '#fd9e72',
    '#91e0ff',
    '#fff6ae',
    '#c6b5e3',
  ];
  const returnColor = colorCounter;

  if (colorCounter >= 7) {
    colorCounter = 0;
  }
  colorCounter += 1;

  return colors[returnColor];
};

export const CareerPageTemplate = ({
  firstSection,
  secondSection,
  perks,
  thirdSection,
  imageSizes,
}) => (
  <main className={styles.careerPage}>
    <section className={styles.careerOms}>
      <h1>{firstSection.title}</h1>
      <p className="bodyLarge">{firstSection.text}</p>
      <ImageWrapper
        alt={firstSection.imageAlt}
        src={firstSection.image}
        outerWrapperClassName={styles.imageContainer}
        sizes={findImageSizes(firstSection.image, imageSizes)}
      />
    </section>
    <section className={styles.whyOms}>
      <h1>{secondSection.title}</h1>
      <p className="bodyLarge">{secondSection.text}</p>
      <ImageWrapper
        alt={secondSection.imageAlt}
        src={secondSection.image}
        outerWrapperClassName={styles.imageContainer}
        sizes={findImageSizes(secondSection.image, imageSizes)}
      />
    </section>
    <section className={styles.careerPerks}>
      <h3>{perks.title}</h3>
      <div className={styles.perkCardContainer}>
        {perks.perkCards.map(perkCard => (
          <PerkCard
            key={perkCard.perkTitle}
            title={perkCard.perkTitle}
            text={perkCard.text}
            color={color()}
          />
        ))}
      </div>
    </section>
    <section className={styles.careerJobVacancies}>
      <h2>{thirdSection.title}</h2>
      <iframe
        title="Job Vacancies"
        src="//delta.hr-manager.net/Vacancies/List.aspx?customer=osloborsvps&amp;uiculture=no&amp;culture=no"
      />
    </section>
  </main>
);

CareerPageTemplate.propTypes = {
  firstSection: PropTypes.shape({}),
  secondSection: PropTypes.shape({}),
  perks: PropTypes.shape({}),
  thirdSection: PropTypes.shape({}),
  imageSizes: PropTypes.arrayOf(PropTypes.object),
};

const CareerPage = ({ data }) => {
  const { markdownRemark: page } = data;
  const imageSizes = data.imageSizes.edges;
  colorCounter = 0;

  return (
    <CareerPageTemplate
      firstSection={page.frontmatter.firstSection}
      secondSection={page.frontmatter.secondSection}
      perks={page.frontmatter.secondSection.perks}
      thirdSection={page.frontmatter.thirdSection}
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
        firstSection {
          title
          text
          image
          imageAlt
        }
        secondSection {
          title
          text
          image
          imageAlt
          perks {
            title
            perkCards {
              perkTitle
              text
            }
          }
        }
        thirdSection {
          title
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
