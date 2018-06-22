import React from 'react';
import PropTypes from 'prop-types';
import Content, { HTMLContent } from '../../components/Content';
import PerkCard from '../../components/perkCard';
import '../../layouts/style.scss';
import styles from './careerPage.module.scss';

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
    <main className={styles.careerPage}>
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
        {/* Her skal alle perks listes ut fra CMSet */}
        <div className={styles.circleGrid}>
          {perkList.map(perk => {
            const { title: perkTitle } = perk.node.frontmatter;
            const perkContent = perk.node.html;

            return <PerkCard content={perkContent} title={perkTitle} />;
          })}
        </div>
      </article>
      <article className={styles.careerJobVacancies}>
        {/* Her skal iFramen med ledige stillinger være */}
        <h2>{subHeader2}</h2>
      </article>
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
  perkList: PropTypes.arrayOf(PropTypes.string),
};

const CareerPage = ({ data }) => {
  const { markdownRemark: post } = data;
  const perkList = data.perks.edges;

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
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
