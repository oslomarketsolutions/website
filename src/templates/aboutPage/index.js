import React from 'react';
import PropTypes from 'prop-types';
import EmployeeCard from '../../components/employeesCard';
import styles from './aboutPage.module.scss';
import { findImageSizes } from '../../utils/helperFunctions';
import ImageWrapper from '../../components/imageWrapper';
import BigButton from '../../components/bigButton';

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
  hero,
  history,
  employees,
  buttonText,
  employeeList,
  imageSizes,
}) => (
  <main className={styles.aboutPage}>
    <section className={styles.hero}>
      <h1>{hero.title}</h1>
      <p className="heroSubtitle">{hero.text}</p>
      <ImageWrapper
        alt="Background image covering top half of screen"
        src={hero.backgroundImage}
        sizes={findImageSizes(hero.backgroundImage, imageSizes)}
        outerWrapperClassName={styles.backgroundImage}
      />
    </section>
    <section className={styles.history}>
      <p className="overline">{history.section}</p>
      <h2>{history.header}</h2>
      <p className="bodyLarge">{history.text}</p>
    </section>
    <section className={styles.aboutEmployees}>
      <p className="overline">{employees.section}</p>
      <h2>{employees.header}</h2>
      <div className={styles.employeeWrapper}>
        {sortedEmployeeList(employeeList) &&
          sortedEmployeeList(employeeList).map((employee, index) => {
            const {
              title: employeeName,
              description: employeeDescription,
              jobTitle: employeeJobTitle,
              image: employeeImage,
              jobType: employeeJobType,
            } = employee.node.frontmatter;

            if (index === 1) {
              const quote =
                employees.quotes[
                  Math.floor(Math.random() * employees.quotes.length)
                ];
              return (
                <div className={styles.quoteWrapper}>
                  <h2>{quote.text}</h2>
                  <p>{quote.author}</p>
                </div>
              );
            }
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
      </div>
    </section>
    <section className={styles.joinTheTeam}>
      <BigButton to="/career" text={buttonText} />
    </section>
  </main>
);

AboutPageTemplate.propTypes = {
  hero: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    backgroundImage: PropTypes.string,
  }),
  history: PropTypes.shape({
    header: PropTypes.string,
    texT: PropTypes.string,
  }),
  employees: PropTypes.shape({
    header: PropTypes.string,
  }),
  buttonText: PropTypes.string,
  employeeList: PropTypes.arrayOf(PropTypes.object),
  imageSizes: PropTypes.arrayOf(PropTypes.object),
};

const AboutPage = ({ data }) => {
  const post = data.page;
  const employeeList = data.employees.edges;
  const imageSizes = data.imageSizes.edges;

  return (
    <AboutPageTemplate
      hero={post.frontmatter.hero}
      history={post.frontmatter.history}
      employees={post.frontmatter.employees}
      buttonText={post.frontmatter.buttonText}
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
        hero {
          title
          text
          backgroundImage
        }
        history {
          section
          header
          text
        }
        employees {
          section
          header
          quotes {
            text
            author
          }
        }
        buttonText
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
