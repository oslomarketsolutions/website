import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../../components/footer';

const FooterPreview = ({ entry }) => {
  const data = {
    markdownRemark: {
      frontmatter: {
        groupWebsites: {
          website1: {
            title: entry.getIn(['data', 'website1', 'title']),
            url: entry.getIn(['data', 'website1', 'url']),
          },
          website2: {
            title: entry.getIn(['data', 'website2', 'title']),
            url: entry.getIn(['data', 'website2', 'url']),
          },
          website3: {
            title: entry.getIn(['data', 'website3', 'title']),
            url: entry.getIn(['data', 'website3', 'url']),
          },
          website4: {
            title: entry.getIn(['data', 'website4', 'title']),
            url: entry.getIn(['data', 'website4', 'url']),
          },
          website5: {
            title: entry.getIn(['data', 'website5', 'title']),
            url: entry.getIn(['data', 'website5', 'url']),
          },
          website6: {
            title: entry.getIn(['data', 'website6', 'title']),
            url: entry.getIn(['data', 'website6', 'url']),
          },
        },
        contactInfo: {
          title: entry.getIn(['data', 'contactInfo', 'title']),
          visitingAddress: entry.getIn([
            'data',
            'contactInfo',
            'visitingAddress',
          ]),
          phoneNumber: entry.getIn(['data', 'contactInfo', 'phoneNumber']),
          email: entry.getIn(['data', 'contactInfo', 'email']),
          mailAddress: entry.getIn(['data', 'contactInfo', 'mailAddress']),
        },
      },
    },
  };

  return <Footer data={data} language="en" />;
};

FooterPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default FooterPreview;
