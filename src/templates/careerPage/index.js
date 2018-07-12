import React from 'react';
import PropTypes from 'prop-types';
import PerkCard from '../../components/perkCard';
import styles from './careerPage.module.scss';

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
  text1,
  header,
  image2,
  text2,
  subHeader1,
  subHeader2,
  perkList,
}) => (
  <main>
    <div className={styles.careerPage}>
      <section className={styles.careerOms}>
        <h2>{title}</h2>
        <img src={image1} alt="" />
        <p>{text1}</p>
      </section>
      <section className={styles.whyOms}>
        <h2>{header}</h2>
        <img src={image2} alt="" />
        <p>{text2}</p>
      </section>
      <section className={styles.careerPerks}>
        <h3>{subHeader1}</h3>
        <div className={styles.perkCardContainer}>
          {perkList.map(perk => {
            const { title: perkTitle, text: perkText } = perk.node.frontmatter;
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
        {/* Her skal iFramen med ledige stillinger være */}
        <h2>{subHeader2}</h2>
        <div className={styles.jobVacanciesContainer} />
      </section>
    </div>
  </main>
);

CareerPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image1: PropTypes.string,
  text1: PropTypes.string,
  header: PropTypes.string,
  image2: PropTypes.string,
  text2: PropTypes.string,
  subHeader1: PropTypes.string,
  subHeader2: PropTypes.string,
  perkList: PropTypes.arrayOf(PropTypes.object),
};

const CareerPage = ({ data }) => {
  const { markdownRemark: post } = data;
  const perkList = data.perks.edges;
  colorCounter = 0;

  return (
    <CareerPageTemplate
      title={post.frontmatter.title}
      image1={post.frontmatter.image1}
      text1={post.frontmatter.text1}
      header={post.frontmatter.header}
      image2={post.frontmatter.image2}
      text2={post.frontmatter.text2}
      subHeader1={post.frontmatter.subHeader1}
      subHeader2={post.frontmatter.subHeader2}
      perkList={perkList}
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
        text1
        header
        image2
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
  }
`;
