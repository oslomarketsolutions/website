import React from 'react';
import PropTypes from 'prop-types';
import styles from './responsibleDisclosurePage.module.scss';
import ContactCard from '../../components/contactCard/index';
import { findImageSizes } from '../../utils/helperFunctions';
import Content, { HTMLContent } from '../../components/content/index';

export const ResponsibleDisclosurePageTemplate = ({
  title,
  image,
  visitingAddress,
  phoneNumber,
  mailAddress,
  content,
  imageSizes,
}) => {
  const PageContent = HTMLContent || Content;

  return (
    <main>
      <div className={styles.responsibleDisclosurePage}>
        <section className={styles.left}>
          <PageContent content={content} />
        </section>
        <section className={styles.right}>
          <ContactCard
            title={title}
            visitingAddress={visitingAddress}
            phoneNumber={phoneNumber}
            mailAddress={mailAddress}
            sizes={findImageSizes(image, imageSizes)}
            image={image}
          />
        </section>
      </div>
    </main>
  );
};

ResponsibleDisclosurePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  visitingAddress: PropTypes.string,
  phoneNumber: PropTypes.string,
  mailAddress: PropTypes.string,
  content: PropTypes.string,
  imageSizes: PropTypes.arrayOf(PropTypes.object),
};

const ResponsibleDisclosurePage = ({ data }) => {
  const { markdownRemark: post } = data;
  const imageSizes = data.imageSizes.edges;

  return (
    <ResponsibleDisclosurePageTemplate
      title={post.frontmatter.contactInfo.title}
      image={post.frontmatter.contactInfo.image}
      visitingAddress={post.frontmatter.contactInfo.visitingAddress}
      phoneNumber={post.frontmatter.contactInfo.phoneNumber}
      mailAddress={post.frontmatter.contactInfo.mailAddress}
      content={post.html}
      imageSizes={imageSizes}
    />
  );
};

ResponsibleDisclosurePage.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default ResponsibleDisclosurePage;

export const responsibleDisclosurePageQuery = graphql`
  query ResponsibleDisclosurePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        contactInfo {
          title
          image
          visitingAddress
          phoneNumber
          mailAddress
        }
      }
    }

    imageSizes: allFile(filter: { absolutePath: { regex: "/static/img/" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            sizes(maxWidth: 1440) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
