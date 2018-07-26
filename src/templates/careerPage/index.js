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
  subHeader1,
  subHeader2,
  perkList,
  imageSizes,
}) => (
  <main>
    <div className={styles.careerPage}>
      <section className={styles.careerOms}>
        <h2>{title}</h2>
        <ImageWrapper
          alt={image1Alt}
          src={image1}
          outerWrapperClassName={styles.imageContainer}
          sizes={findImageSizes(image1, imageSizes)}
        />
        <p>{text1}</p>
      </section>
      <section className={styles.whyOms}>
        <h2>{header}</h2>
        <ImageWrapper
          alt={image2Alt}
          src={image2}
          outerWrapperClassName={styles.imageContainer}
          sizes={findImageSizes(image2, imageSizes)}
        />
        <p>{text2}</p>
      </section>
      <section className={styles.careerPerks}>
        <h3>{subHeader1}</h3>
        <div className={styles.perkCardContainer}>
          {perkList &&
            perkList.map(perk => {
              const {
                title: perkTitle,
                text: perkText,
              } = perk.node.frontmatter;
              return (
                <PerkCard
                  key={perkTitle}
                  title={perkTitle}
                  text={perkText}
                  color={color()}
                />
              );
            })}
        </div>
      </section>
      <section className={styles.careerJobVacancies}>
        <h2>{subHeader2}</h2>
        <iframe
          title="Job Vacancies"
          src="//delta.hr-manager.net/Vacancies/List.aspx?customer=osloborsvps&amp;uiculture=no&amp;culture=no"
        />
      </section>
    </div>
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
  subHeader1: PropTypes.string,
  subHeader2: PropTypes.string,
  perkList: PropTypes.arrayOf(PropTypes.object),
  imageSizes: PropTypes.arrayOf(PropTypes.object),
};

const CareerPage = ({ data }) => {
  const { markdownRemark: post } = data;
  const perkList = data.perks.edges;
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
      subHeader1={post.frontmatter.subHeader1}
      subHeader2={post.frontmatter.subHeader2}
      perkList={perkList}
      imageSizes={imageSizes}
    />
  );
};

CareerPage.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default CareerPage;

export const careerPageQuery = graphql`
  query CareerPage($id: String!, $perkRegex: String!) {
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
        subHeader1
        subHeader2
      }
    }

    perks: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: $perkRegex } }
    ) {
      edges {
        node {
          frontmatter {
            title
            text
          }
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
