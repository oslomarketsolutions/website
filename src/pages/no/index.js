import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

export default function IndexPage({ data }) {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <section>
      <div>
        <div>
          <h1>Siste historier</h1>
        </div>
        {posts
          .filter(post => post.node.frontmatter.templateKey === 'blog-post')
          .filter(post => post.node.frontmatter.language === 'no')
          .map(({ node: post }) => (
            <div
              style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
              key={post.id}
            >
              <p>
                <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                <span> &bull; </span>
                <small>{post.frontmatter.date}</small>
              </p>
              <p>
                {post.excerpt}
                <br />
                <br />
                <Link to={post.fields.slug}>Keep Reading →</Link>
              </p>
            </div>
          ))}
      </div>
    </section>
  );
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export const pageQuery = graphql`
  query NorIndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            language
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
