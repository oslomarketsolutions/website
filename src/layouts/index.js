import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'font-awesome/css/font-awesome.min.css';

import './style.css';
import EmployeeCard from '../components/employeesCard';

const TemplateWrapper = ({ location }) => {
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
        description="Eitan twee activated charcoal pug, XOXO crucifix portland. Lomo brunch cliche art party keffiyeh"
        image={'https://picsum.photos/200/300'}
      />
    </React.Fragment>
  );
};

TemplateWrapper.propTypes = {
  location: PropTypes.shape({}),
};

export default TemplateWrapper;
