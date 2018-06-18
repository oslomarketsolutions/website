import React from 'react';
import PropTypes from 'prop-types';
import Content, { HTMLContent } from '../components/Content';

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
    <div className="container">
      <section className="career-oms">
        <h2 className="title">{title}</h2>
        <div className="content">{text}</div>
        <img src={image} alt="" />
      </section>
      <section className="career-body">
        <PageContent className="content" content={content} />
      </section>
      <section className="career-perks">
        <h3 className="title">{subHeader1}</h3>
        {/* Her skal alle perks listes ut fra CMSet */}
        <div className="perk" />
        <div className="perk" />
        <div className="perk" />
        <div className="perk" />
        <div className="perk" />
        <div className="perk" />
        <div className="perk" />
        <div className="perk" />
      </section>
      <section className="career-job-vacancies">
        {/* Her skal iFramen med ledige stillinger være */}
        <h2 className="header-title title">{subHeader2}</h2>
        <div className="job-vacancies-iframe" />
      </section>
    </div>
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
