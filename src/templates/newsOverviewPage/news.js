import React from 'react';
import PropTypes from 'prop-types';
import NewsCard from '../../components/newsCard';
import styles from './newsOverviewPage.module.scss';
import { findImageSizes } from '../../utils/helperFunctions';

const NewsOverviewPageTemplate = ({ newsArticles, imageSizes }) => (
  <main>
    <section className={styles.newsOverviewPage}>
      <h1>News</h1>

      <section className={styles.cardContainer}>
        {console.log(newsArticles)}
        {newsArticles &&
          newsArticles
            .reverse()
            .map(newsArticle => (
              <NewsCard
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

export default NewsOverviewPageTemplate;

NewsOverviewPageTemplate.propTypes = {
  newsArticles: PropTypes.arrayOf(PropTypes.object),
  imageSizes: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.object),
  }),
};
