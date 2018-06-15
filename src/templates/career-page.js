import React from 'react';
import PropTypes from 'prop-types';
import Content, { HTMLContent } from '../components/Content';

export const CareerPageTemplate = ({
  contentComponent,
  content,
  title,
  text,
  image,
  header1,
  subHeader1,
  subHeader2,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <div className="career-oms">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                <div className="content">{text}</div>
                <img src={image} alt="" />
              </div>
              <div className="career-body">
                <h2 className="header-title title is-size-3 has-text-weight-bold is-bold-light">
                  {header1}
                </h2>
                <PageContent className="content" content={content} />
              </div>
              <div className="career-perks">
                <h3 className="title is-size-4 has-text-weight-bold is-bold-light">
                  {subHeader1}
                </h3>
                {/* Her skal alle perks listes ut fra CMSet */}
                <div className="perk" />
                <div className="perk" />
                <div className="perk" />
                <div className="perk" />
                <div className="perk" />
                <div className="perk" />
                <div className="perk" />
                <div className="perk" />
              </div>
              <div className="career-job-vacancies">
                {/* Her skal iFramen med ledige stillinger være */}
                <h2 className="header-title title is-size-3 has-text-weight-bold is-bold-light">
                  {subHeader2}
                </h2>
                <div className="job-vacancies-iframe" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CareerPageTemplate.propTypes = {
  contentComponent: PropTypes.func,
  content: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  image: PropTypes.string,
  header1: PropTypes.string,
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
      header1={post.frontmatter.header1}
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
        header1
        subHeader1
        subHeader2
      }
    }
  }
`;
