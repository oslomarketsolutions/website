import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import EmployeeCard from '../components/EmployeeCard';
import Navbar from '../components/Navbar';
import './style.css';

const TemplateWrapper = ({ children, location }) => {
  const parsedPath = /^\/(\w\w)/.exec(location.pathname);
  const lang = parsedPath && parsedPath[1];

  return (
    <React.Fragment>
      <Helmet title="Oslo Market Solutions">
        <html lang={lang} />
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-
        awesome.min.css"
          rel="stylesheet"
          integrity="sha384-
        wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossOrigin="anonymous"
        />
      </Helmet>
      <EmployeeCard
        name="Janne Johnsen"
        position="Front-end Developer"
        description="Liker et eller annet"
      />
    </React.Fragment>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  location: PropTypes.shape({}),
};

export default TemplateWrapper;
