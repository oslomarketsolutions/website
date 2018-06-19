import React from 'react';
import PropTypes from 'prop-types';
import global from '../../layouts/style.scss';
import styles from './aboutPage.module.scss';

export const AboutPageTemplate = ({ title, header1, image, text, header2 }) => (
  <main className={styles.aboutPage}>
    <article>
      <h2>{title}</h2>
      <p>submeny | placeholder</p>
    </article>
    <article className={styles.aboutOms}>
      <h2>{header1}</h2>
      <section>{text}</section>
      <img src={image} alt="" />
    </article>
    <article>
      <h2>{header2}</h2>
    </article>
  </main>
);

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  header1: PropTypes.string,
  image: PropTypes.string,
  text: PropTypes.string,
  header2: PropTypes.string,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <AboutPageTemplate
      title={post.frontmatter.title}
      header1={post.frontmatter.header1}
      image={post.frontmatter.image}
      text={post.frontmatter.text}
      header2={post.frontmatter.header2}
    />
  );
};

AboutPage.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        header1
        image
        text
        header2
      }
    }
  }
`;
