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
  title,
  image1,
  image1Alt,
  text1,
  header,
  image2,
  image2Alt,
  text2,
  perks,
  jobVacanciesTitle,
  imageSizes,
}) => (
  <main className={styles.careerPage}>
    <section className={styles.careerOms}>
      <h1>{title}</h1>
      <p className="bodyLarge">{text1}</p>
      <ImageWrapper
        alt={image1Alt}
        src={image1}
        outerWrapperClassName={styles.imageContainer}
        sizes={findImageSizes(image1, imageSizes)}
      />
    </section>
    <section className={styles.whyOms}>
      <h1>{header}</h1>
      <p className="bodyLarge">{text2}</p>
      <ImageWrapper
        alt={image2Alt}
        src={image2}
        outerWrapperClassName={styles.imageContainer}
        sizes={findImageSizes(image2, imageSizes)}
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
      <h2>{jobVacanciesTitle}</h2>
      <iframe
        title="Job Vacancies"
        src="//delta.hr-manager.net/Vacancies/List.aspx?customer=osloborsvps&amp;uiculture=no&amp;culture=no"
      />
    </section>
  </main>
);

CareerPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image1: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  image1Alt: PropTypes.string,
  text1: PropTypes.string,
  header: PropTypes.string,
  image2: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  image2Alt: PropTypes.string,
  text2: PropTypes.string,
  perks: PropTypes.shape({}),
  jobVacanciesTitle: PropTypes.string,
  imageSizes: PropTypes.arrayOf(PropTypes.object),
};

const CareerPage = ({ data }) => {
  const { markdownRemark: post } = data;
  const imageSizes = data.imageSizes.edges;
  colorCounter = 0;

  return (
    <CareerPageTemplate
      title={post.frontmatter.title}
      image1={post.frontmatter.image1}
      image1Alt={post.frontmatter.image1Alt}
      text1={post.frontmatter.text1}
      header={post.frontmatter.header}
      image2={post.frontmatter.image2}
      image2Alt={post.frontmatter.image2Alt}
      text2={post.frontmatter.text2}
      perks={post.frontmatter.perks}
      jobVacanciesTitle={post.frontmatter.jobVacanciesTitle}
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
        title
        image1
        image1Alt
        text1
        header
        image2
        image2Alt
        text2
        perks {
          title
          perkCards {
            perkTitle
            text
          }
        }
        jobVacanciesTitle
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
