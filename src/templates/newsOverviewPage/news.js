import React from 'react';
import PropTypes from 'prop-types';
import NewsCard from '../../components/newsCard';
import styles from './newsOverviewPage.module.scss';
import { findImageSizes } from '../../utils/helperFunctions';

const NewsOverviewPageTemplate = ({ newsArticles, imageSizes }) => {
  // newsArticles is already sorted on date desc by the graphql-query,
  // so equal means newest post first.
  newsArticles.sort((a, b) => {
    if (a.node.frontmatter.sticky) {
      // If both are sticky return 'equal', if b is not sticky return 'a first'
      return b.node.frontmatter.sticky ? 0 : -1;
    }
    // If only b is sticky return 'b first', if neither is sticky return 'equal'
    return b.node.frontmatter.sticky ? 1 : 0;
  });
  return (
    <main>
      <section className={styles.newsOverviewPage}>
        <h1>News</h1>

        <section className={styles.cardContainer}>
          {newsArticles &&
            newsArticles.map(newsArticle => (
              <NewsCard
                key={newsArticle.node.fields.slug}
                slug={newsArticle.node.fields.slug}
                title={newsArticle.node.frontmatter.title}
                image={newsArticle.node.frontmatter.image}
                date={newsArticle.node.frontmatter.date}
                sizes={findImageSizes(
                  newsArticle.node.frontmatter.image,
                  imageSizes,
                )}
                sticky={newsArticle.node.frontmatter.sticky}
              />
            ))}
        </section>
      </section>
    </main>
  );
};

export default NewsOverviewPageTemplate;

NewsOverviewPageTemplate.propTypes = {
  newsArticles: PropTypes.arrayOf(PropTypes.object),
  imageSizes: PropTypes.arrayOf(PropTypes.object),
};
