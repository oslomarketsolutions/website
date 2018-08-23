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

  const cookiePopUp = {
    text: 'test',
    manageButtonText: 'test',
    confirmationButtonText: 'test',
  };

  const necessaryCookiesCookies = {
    name: 'test',
    purpose: 'test',
  };

  const necessaryCookies = {
    id: 'test',
    header: 'test',
    text: 'test',
    cookies: necessaryCookiesCookies,
  };

  const analyticsCookiesCookies = {
    name: 'test',
    purpose: 'test',
  };

  const analyticsCookies = {
    id: 'test',
    header: 'test',
    text: 'test',
    cookies: analyticsCookiesCookies,
  };

  const trackingCookiesCookies = {
    name: 'test',
    purpose: 'test',
  };

  const trackingCookies = {
    id: 'test',
    header: 'test',
    text: 'test',
    cookies: trackingCookiesCookies,
  };

  const cookieManager = {
    necessaryCookies,
    analyticsCookies,
    trackingCookies,
    buttonText: 'test',
  };

  const cookieInfoEn = {
    frontmatter: {
      title: 'test',
      cookiePopUp,
      cookieManager,
    },
  };

  return (
    <PreviewWrapper>
      <Navbar
        language="en"
        location={location}
        data={data}
        cookieInfoEn={cookieInfoEn}
      />
    </PreviewWrapper>
  );
};

NavbarPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default NavbarPreview;
