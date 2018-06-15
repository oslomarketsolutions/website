import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

const TagRoute = props => {
  const posts = props.data.allMarkdownRemark.edges;
  const postLinks = posts.map(post => (
    <li key={post.node.fields.slug}>
      <Link to={post.node.fields.slug}>
        <h2>{post.node.frontmatter.title}</h2>
      </Link>
    </li>
  ));
  const { tag } = props.pathContext;
  const { title } = props.data.site.siteMetadata;
  const { totalCount } = props.data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with “${tag}”`;

  return (
    <section>
      <Helmet title={`${tag} | ${title}`} />
      <div>
        <div>
          <div style={{ marginBottom: '6rem' }}>
            <h3>{tagHeader}</h3>
            <ul>{postLinks}</ul>
            <p>
              <Link to="/tags/">Browse all tags</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

TagRoute.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.shape({}),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({}),
    }),
  }).isRequired,
  pathContext: PropTypes.shape({
    tag: PropTypes.string,
  }).isRequired,
};

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
