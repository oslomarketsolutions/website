import React from 'react';
import PropTypes from 'prop-types';
import Content, { HTMLContent } from '../../components/Content';
import PerkCard from '../../components/perkCard';
import '../../layouts/style.scss';
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
  contentComponent,
  content,
  title,
  text,
  image,
  subHeader1,
  subHeader2,
  perkList,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <main>
      <div className={styles.careerPage}>
        <article className={styles.careerOms}>
          <h2>{title}</h2>
          <section>{text}</section>
          <img src={image} alt="" />
        </article>
        <article>
          <PageContent content={content} />
        </article>
        <article className={styles.careerPerks}>
          <h3>{subHeader1}</h3>
          <div className={styles.perkCardContainer}>
            {perkList.map(perk => {
              const perkContent = perk.node.html;

              return <PerkCard content={perkContent} color={color()} />;
            })}
          </div>
        </article>
        <article className={styles.careerJobVacancies}>
          {/* Her skal iFramen med ledige stillinger være */}
          <h2>{subHeader2}</h2>
        </article>
      </div>
    </main>
  );
};

CareerPageTemplate.propTypes = {
  contentComponent: PropTypes.func,
  content: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  image: PropTypes.string,
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
      contentComponent={HTMLContent}
      content={post.html}
      title={post.frontmatter.title}
      text={post.frontmatter.text}
      image={post.frontmatter.image}
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
      html
      frontmatter {
        title
        text
        image
        subHeader1
        subHeader2
      }
    }

    perks: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: $perkRegex } }
    ) {
      edges {
        node {
          html
        }
      }
    }
  }
`;
