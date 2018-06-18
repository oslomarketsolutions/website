import React from 'react';
import PropTypes from 'prop-types';
import EmployeeCard from '../components/employeesCard';

export const AboutPageTemplate = ({
  title,
  header1,
  image,
  text,
  header2,
  employeeList,
}) => (
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
              {employeeList.map(employee => {
                const {
                  title: employeeName,
                  description: employeeDescription,
                  jobTitle: employeeJobTitle,
                  image: employeeImage,
                  jobType: employeeJobType,
                } = employee.node.frontmatter;
                return (
                  <EmployeeCard
                    name={employeeName}
                    description={employeeDescription}
                    jobTitle={employeeJobTitle}
                    image={employeeImage}
                    jobType={employeeJobType}
                  />
                );
              })}
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
  employeeList: PropTypes.arrayOf(PropTypes.string),
};

const AboutPage = ({ data }) => {
  const post = data.page;
  const employeeList = data.employees.edges;
  return (
    <AboutPageTemplate
      title={post.frontmatter.title}
      header1={post.frontmatter.header1}
      image={post.frontmatter.image}
      text={post.frontmatter.text}
      header2={post.frontmatter.header2}
      employeeList={employeeList}
    />
  );
};

AboutPage.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!, $langRegex: String) {
    page: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        header1
        image
        text
        header2
      }
    }

    employees: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: $langRegex } }
    ) {
      edges {
        node {
          frontmatter {
            title
            jobTitle
            description
            image
            jobType
          }
        }
      }
    }
  }
`;
