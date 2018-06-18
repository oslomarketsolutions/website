import React from 'react';
import PropTypes from 'prop-types';

export const AboutPageTemplate = ({ title, header1, image, text, header2 }) => (
  <div className="container">
    <section className="about-submenu">
      <h2>{title}</h2>
      <p className="submenu-placeholder">submeny | placeholder</p>
    </section>
    <section className="about-oms">
      <h2>{header1}</h2>
      <div className="oms-text">{text}</div>
      <img className="oms-image" src={image} alt="" />
    </section>
    <section className="about-employees">
      <h2>{header2}</h2>
    </section>
  </div>
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
