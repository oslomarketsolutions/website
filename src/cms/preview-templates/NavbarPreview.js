import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../../components/navbar';
import PreviewWrapper from '../../components/previewWrapper';

const NavbarPreview = ({ entry }) => {
  const data = {
    frontmatter: {
      numberOfJobVacancies: entry.getIn(['data', 'numberOfJobVacancies']),
    },
  };
  const location = {
    pathname: '/en',
  };

  return (
    <PreviewWrapper>
      <Navbar language="en" location={location} data={data} />
    </PreviewWrapper>
  );
};

NavbarPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default NavbarPreview;
