import React from 'react';
import PropTypes from 'prop-types';
import Content, { HTMLContent } from '../components/Content';

export const AboutPageTemplate = ({
  title,
  submenuItem1,
  submenuItem2,
  image,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="header-title title is-size-3 has-text-weight-bold is-bold-light">
                {submenuItem1}
              </h2>
              <p className="submeny-placeholder">submeny | placeholder</p>
              <div className="about-oms">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                <PageContent className="content" content={content} />
                <img src={image} alt="" />
              </div>
              <div className="about-employees">
                <h2 className="header-title title is-size-3 has-text-weight-bold is-bold-light">
                  {submenuItem2}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  submenuItem1: PropTypes.string,
  submenuItem2: PropTypes.string,
  image: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      submenuItem1={post.frontmatter.submenuItem1}
      submenuItem2={post.frontmatter.submenuItem2}
      image={post.frontmatter.image}
      content={post.html}
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
      html
      frontmatter {
        title
        submenuItem1
        submenuItem2
        image
      }
    }
  }
`;
