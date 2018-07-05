import React, { Component } from 'react';
import PropTypes from 'prop-types';
import scrollIntoView from 'scroll-into-view-if-needed';
import styles from './productPage.module.scss';
import LinkCard from '../../components/linkCard';
import oneYearGraph from '../../components/oneYearGraph';

export class ProductPageTemplate extends Component {
  propTypes = {
    intro: PropTypes.shape({
      title: PropTypes.string,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
          title: PropTypes.string,
        }),
      ),
    }),
    investorPortal: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      features: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
          title: PropTypes.string,
          image: PropTypes.string,
        }),
      ),
    }),
    products: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string,
        title: PropTypes.string,
      }),
    ),
  };

  state = {
    stickyLinks: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', () => {
      this.handleScroll();
    });
    const linksElement = this.links;
    this.offsetPosition = linksElement.offsetTop;
    console.log(oneYearGraph);
  }

  handleScroll = () => {
    if (window.pageYOffset >= this.offsetPosition) {
      this.setState({ stickyLinks: true });
    } else {
      this.setState({ stickyLinks: false });
    }
  };

  scrollToRef = ref => {
    scrollIntoView(this[ref], {
      behavior: 'smooth',
      scrollMode: 'always',
      block: 'start',
      inline: 'start',
    });
  };

  render() {
    const { intro, investorPortal, products } = this.props;
    const linksStyle = this.state.stickyLinks
      ? styles.sticky
      : styles.notSticky;
    return (
      <div className={styles.container}>
        <section className={styles.intro}>
          <h2>{intro.title}</h2>
          <div
            ref={div => {
              this.links = div;
            }}
            className={linksStyle}
          >
            <LinkCard
              product={investorPortal}
              onClickFunction={this.scrollToRef}
              sticky={this.state.stickyLinks}
            />
            {products.map(product => (
              <LinkCard
                product={product}
                onClickFunction={this.scrollToRef}
                sticky={this.state.stickyLinks}
              />
            ))}
          </div>
        </section>

        {oneYearGraph()}

        <section
          ref={section => {
            this[investorPortal.title] = section;
          }}
          className={styles.investorPortal}
        >
          <div className={styles.investor}>
            <h3>{investorPortal.title}</h3>
            <p>{investorPortal.description}</p>
            <img src={investorPortal.image} alt={investorPortal.title} />
          </div>
          {investorPortal.features &&
            investorPortal.features.map(feature => (
              <div className={styles.features}>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
        </section>
        <section className={styles.investorContact}>
          <h4>Contact us today to get more info about our traders!</h4>
          <button>Contact</button>
        </section>

        <section className={styles.productsContainer}>
          {products &&
            products.map(product => (
              <div
                ref={div => {
                  this[product.title] = div;
                }}
                className={styles.product}
              >
                <div className={styles.textContainer}>
                  <h4>{product.title}</h4>
                  <p>{product.description}</p>
                </div>
                <div className={styles.imageContainer}>
                  <img src={product.image} alt={product.title} />
                </div>
              </div>
            ))}
        </section>
      </div>
    );
  }
}

const ProductPage = ({ data }) => {
  const page = data.markdownRemark.frontmatter;
  return (
    <ProductPageTemplate
      intro={page.intro}
      investorPortal={page.investorPortal}
      products={page.products}
    />
  );
};

export default ProductPage;

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        intro {
          title
          links {
            title
            text
          }
        }
        investorPortal {
          title
          description
          image
          features {
            title
            image
            description
          }
        }
        products {
          title
          description
          image
        }
      }
    }
  }
`;
