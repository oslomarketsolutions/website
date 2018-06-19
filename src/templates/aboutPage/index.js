import React from 'react';
import PropTypes from 'prop-types';
import EmployeeCard from '../../components/employeesCard';
import '../../layouts/style.scss';
import styles from './aboutPage.module.scss';

export const AboutPageTemplate = ({
  title,
  header1,
  image,
  text,
  header2,
  employeeList,
}) => (
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
    <article className={styles.aboutEmployees}>
      <h2>{header2}</h2>
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
    </article>
  </main>
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
  query AboutPage($id: String!, $employeeRegex: String!) {
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
      filter: { fileAbsolutePath: { regex: $employeeRegex } }
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
