import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../../components/navbar';
import PreviewWrapper from '../../components/previewWrapper';

const FooterPreview = ({ entry }) => {
  const data = {
    frontmatter: {
      numberOfJobVacancies: entry.getIn(['data', 'numberOfJobVacancies']),
    },
  };

  return (
    <PreviewWrapper>
      <Navbar language="en" location="/en/" data={data} />
    </PreviewWrapper>
  );
};

FooterPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default FooterPreview;
