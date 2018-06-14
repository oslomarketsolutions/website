import React from 'react';
import PropTypes from 'prop-types';
import Content, { HTMLContent } from '../components/Content';

export const CareerPageTemplate = ({
  title,
  header1,
  header2,
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
                {title}
              </h2>
              <p className="submeny-placeholder">submeny | placeholder</p>
              <div className="about-oms">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {header1}
                </h2>
                <PageContent className="content" content={content} />
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
};

CareerPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  header1: PropTypes.string,
  header2: PropTypes.string,
  image: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const CareerPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <CareerPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      header1={post.frontmatter.header1}
      header2={post.frontmatter.header2}
      image={post.frontmatter.image}
      content={post.html}
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
        header1
        header2
        image
      }
    }
  }
`;
