import React from 'react';
import PropTypes from 'prop-types';
import Content, { HTMLContent } from '../components/Content';

export const AboutPageTemplate = ({
  title,
  header1,
  header2,
  image,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section>
      <div>
        <div>
          <div>
            <div>
              <h2>{title}</h2>
              <p className="submeny-placeholder">submeny | placeholder</p>
              <div className="about-oms">
                <h2>{header1}</h2>
                <PageContent content={content} />
                <img src={image} alt="" />
              </div>
              <div className="about-employees">
                <h2>{header2}</h2>
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
  header1: PropTypes.string,
  header2: PropTypes.string,
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
      header1={post.frontmatter.header1}
      header2={post.frontmatter.header2}
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
        header1
        header2
        image
      }
    }
  }
`;
