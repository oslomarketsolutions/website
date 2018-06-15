import React from 'react';
import PropTypes from 'prop-types';

export const AboutPageTemplate = ({ title, header1, image, text, header2 }) => (
  <section className="section section--gradient">
    <div className="container">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <div className="section">
            <h2 className="header-title title is-size-3 has-text-weight-bold is-bold-light">
              {title}
            </h2>
            <p className="submeny-placeholder">submeny | placeholder</p>
            <div className="about-oms">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {header1}
              </h2>
              <div className="content">{text}</div>
              <img src={image} alt="" />
            </div>
            <div className="about-employees">
              <h2 className="header-title title is-size-3 has-text-weight-bold is-bold-light">
                {header2}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
