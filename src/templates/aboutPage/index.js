import React from 'react';
import PropTypes from 'prop-types';
import EmployeeCard from '../../components/employeesCard';
import styles from './aboutPage.module.scss';
import {
  findImageSizes,
  findImageResolutions,
} from '../../utils/helperFunctions';
import ImageWrapper from '../../components/imageWrapper';
import BigButton from '../../components/bigButton';

export const AboutPageTemplate = ({
  hero,
  history,
  employees,
  buttonText,
  imageSizes,
  employeeResolutions,
  language,
}) => {
  // Insert a placeholder as second item in array.
  // In employeeWrapper the map will replace the placeholder with actual quote
  if (
    employees.employeeList &&
    employees.employeeList[1] &&
    employees.employeeList[1].title !== 'quoteWrapper'
  ) {
    employees.employeeList.splice(1, 0, { title: 'quoteWrapper' });
  }

  return (
    <main className={styles.aboutPage}>
      <section className={styles.hero}>
        <div className={styles.textContainer}>
          <h1>{hero.title}</h1>
          <p className="heroSubtitle">{hero.text}</p>
        </div>
        <ImageWrapper
          alt="Background image covering top half of screen"
          src={hero.backgroundImage}
          sizes={findImageSizes(hero.backgroundImage, imageSizes)}
          outerWrapperClassName={styles.backgroundImage}
        />
      </section>
      <section className={styles.history}>
        <div className={styles.textContainer}>
          <p className="overline">{history.section}</p>
          <h2>{history.header}</h2>
          <p className="bodyLarge">{history.text}</p>
        </div>
      </section>
      <section className={styles.aboutEmployees}>
        <div className={styles.textContainer}>
          <p className="overline">{employees.section}</p>
          <h2>{employees.header}</h2>
        </div>
        <div className={styles.employeeWrapper}>
          {// The second element in sortedEmployeeList is a placeholder
          // for the quote.
          employees.employeeList &&
            employees.employeeList.map((employee, index) => {
              const {
                title: employeeName,
                description: employeeDescription,
                jobTitle: employeeJobTitle,
                image: employeeImage,
                jobType: employeeJobType,
              } = employee;

              // Quote should be the second card to be displayed
              if (index === 1) {
                // Get a random quote from the quotes-array
                const quote =
                  employees.quotes[
                    Math.floor(Math.random() * employees.quotes.length)
                  ];
                return (
                  <div key={quote.text} className={styles.quoteWrapper}>
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
                  resolutions={findImageResolutions(
                    employeeImage,
                    employeeResolutions,
                  )}
                  jobType={employeeJobType}
                  image={employeeImage}
                />
              );
            })}
        </div>
      </section>
      <section className={styles.joinTheTeam}>
        <BigButton to={`/${language}/career`} text={buttonText} />
      </section>
    </main>
  );
};

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
    section: PropTypes.string,
    header: PropTypes.string,
    quotes: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        author: PropTypes.string,
      }),
    ),
    employeeList: PropTypes.arrayOf(PropTypes.object),
  }),
  buttonText: PropTypes.string,
  imageSizes: PropTypes.arrayOf(PropTypes.object),
  employeeResolutions: PropTypes.arrayOf(PropTypes.object),
  language: PropTypes.string,
};

const AboutPage = ({ data, language }) => {
  const post = data.page;
  const imageSizes = data.imageSizes.edges;
  const employeeResolutions = data.employeeResolutions.edges;

  return (
    <AboutPageTemplate
      hero={post.frontmatter.hero}
      history={post.frontmatter.history}
      employees={post.frontmatter.employees}
      buttonText={post.frontmatter.buttonText}
      imageSizes={imageSizes}
      employeeResolutions={employeeResolutions}
      language={language}
    />
  );
};

AboutPage.propTypes = {
  data: PropTypes.shape({}).isRequired,
  language: PropTypes.string,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
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
          employeeList {
            title
            jobTitle
            description
            image
            jobType
          }
        }
        buttonText
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

    employeeResolutions: allFile(
      filter: { absolutePath: { regex: "/static/img/" } }
    ) {
      edges {
        node {
          relativePath
          childImageSharp {
            resolutions(width: 100, height: 100, quality: 90) {
              ...GatsbyImageSharpResolutions
            }
          }
        }
      }
    }
  }
`;
