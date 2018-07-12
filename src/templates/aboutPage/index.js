import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import EmployeeCard from '../../components/employeesCard';
import styles from './aboutPage.module.scss';
import { findImageSize } from '../../components/helperFunctions';

export const AboutPageTemplate = ({
  image,
  text,
  title,
  header,
  employeeList,
  imageSizes,
}) => (
  <main>
    <div className={styles.aboutPage}>
      <section className={styles.aboutOms}>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className={styles.imageContainer}>
          <Img sizes={findImageSize(image, imageSizes)} />
        </div>
      </section>
      <article className={styles.aboutEmployees}>
        <h2>{header}</h2>
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
              portraitSize={findImageSize(employeeImage, imageSizes)}
              headerBackgroundSize={findImageSize(
                'ansattkortHeader.png',
                imageSizes,
              )}
              jobType={employeeJobType}
            />
          );
        })}
      </article>
    </div>
  </main>
);

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  text: PropTypes.string,
  header: PropTypes.string,
  employeeList: PropTypes.arrayOf(PropTypes.object),
  imageSizes: PropTypes.arrayOf(PropTypes.object),
};

const AboutPage = ({ data }) => {
  const post = data.page;
  const employeeList = data.employees.edges;
  const imageSizes = data.imageSizes.edges;

  return (
    <AboutPageTemplate
      image={post.frontmatter.image}
      title={post.frontmatter.title}
      text={post.frontmatter.text}
      header={post.frontmatter.header}
      employeeList={employeeList}
      imageSizes={imageSizes}
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

    imageSizes: allFile(filter: { absolutePath: { regex: "/static/img/" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            sizes(maxWidth: 1800) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
