import React from 'react';
import PropTypes from 'prop-types';
import EmployeeCard from '../../components/employeesCard';
import styles from './aboutPage.module.scss';
import { findImageSizes } from '../../utils/helperFunctions';
import ImageWrapper from '../../components/imageWrapper';

const sortedEmployeeList = array => {
  const newArray = [];
  array.forEach(element => {
    const newElement = element;
    if (newElement.node.frontmatter.jobType === 'management') {
      newElement.node.frontmatter.sortOrder = 1;
    } else if (newElement.node.frontmatter.jobType === 'operations') {
      newElement.node.frontmatter.sortOrder = 2;
    } else if (newElement.node.frontmatter.jobType === 'support') {
      newElement.node.frontmatter.sortOrder = 3;
    } else if (newElement.node.frontmatter.jobType === 'frontEnd') {
      newElement.node.frontmatter.sortOrder = 4;
    } else if (newElement.node.frontmatter.jobType === 'designer') {
      newElement.node.frontmatter.sortOrder = 5;
    } else if (newElement.node.frontmatter.jobType === 'backEnd') {
      newElement.node.frontmatter.sortOrder = 6;
    } else if (newElement.node.frontmatter.jobType === 'summerIntern') {
      newElement.node.frontmatter.sortOrder = 7;
    }

    newArray.push(newElement);
  });

  return newArray.sort(
    (a, b) => a.node.frontmatter.sortOrder - b.node.frontmatter.sortOrder,
  );
};

export const AboutPageTemplate = ({
  image,
  imageAlt,
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
        <ImageWrapper
          alt={imageAlt}
          src={image}
          sizes={findImageSizes(image, imageSizes)}
          outerWrapperClassName={styles.imageContainer}
        />
      </section>
      <section className={styles.aboutEmployees}>
        <h2>{header}</h2>
        {sortedEmployeeList(employeeList) &&
          sortedEmployeeList(employeeList).map(employee => {
            const {
              title: employeeName,
              description: employeeDescription,
              jobTitle: employeeJobTitle,
              image: employeeImage,
              jobType: employeeJobType,
            } = employee.node.frontmatter;
            return (
              <EmployeeCard
                key={employeeName}
                name={employeeName}
                description={employeeDescription}
                jobTitle={employeeJobTitle}
                portraitSize={findImageSizes(employeeImage, imageSizes)}
                jobType={employeeJobType}
                image={employeeImage}
              />
            );
          })}
      </section>
    </div>
  </main>
);

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  imageAlt: PropTypes.string,
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
        imageAlt
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
