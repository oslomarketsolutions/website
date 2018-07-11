import React from 'react';
import PropTypes from 'prop-types';
import EmployeeCard from '../../components/employeesCard';
import styles from './aboutPage.module.scss';

export const AboutPageTemplate = ({
  title,
  image,
  text,
  header,
  employeeList,
}) => (
  <main>
    <div className={styles.aboutPage}>
      <section className={styles.aboutOms}>
        <h2>{title}</h2>
        <p>{text}</p>
        <img src={image} alt="" />
      </section>
      <section className={styles.aboutEmployees}>
        <h2>{header}</h2>
        {employeeList &&
          employeeList.map(employee => {
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
      </section>
    </div>
  </main>
);

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  text: PropTypes.string,
  header: PropTypes.string,
  employeeList: PropTypes.arrayOf(PropTypes.object),
};

const AboutPage = ({ data }) => {
  const post = data.page;
  const employeeList = data.employees.edges;
  return (
    <AboutPageTemplate
      title={post.frontmatter.title}
      image={post.frontmatter.image}
      text={post.frontmatter.text}
      header={post.frontmatter.header}
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
        image
        text
        header
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
