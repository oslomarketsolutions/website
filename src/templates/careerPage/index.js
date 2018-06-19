import React from 'react';
import PropTypes from 'prop-types';
import Content, { HTMLContent } from '../../components/Content';
import global from '../../layouts/style.scss';
import styles from './careerPage.module.scss';

export const CareerPageTemplate = ({
  contentComponent,
  content,
  title,
  text,
  image,
  subHeader1,
  subHeader2,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <main className={styles.careerPage}>
      <section className={styles.careerOms}>
        <h2>{title}</h2>
        <div>{text}</div>
        <img src={image} alt="" />
      </section>
      <section>
        <PageContent content={content} />
      </section>
      <section className={styles.careerPerks}>
        <h3>{subHeader1}</h3>
        {/* Her skal alle perks listes ut fra CMSet */}
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </section>
      <section className={styles.careerJobVacancies}>
        {/* Her skal iFramen med ledige stillinger være */}
        <h2>{subHeader2}</h2>
        <div />
      </section>
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
};

const CareerPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <CareerPageTemplate
      contentComponent={HTMLContent}
      content={post.html}
      title={post.frontmatter.title}
      text={post.frontmatter.text}
      image={post.frontmatter.image}
      subHeader1={post.frontmatter.subHeader1}
      subHeader2={post.frontmatter.subHeader2}
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
      html
      frontmatter {
        title
        text
        image
        subHeader1
        subHeader2
      }
    }
  }
`;
