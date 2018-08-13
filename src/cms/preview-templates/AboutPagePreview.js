import React from 'react';
import PropTypes from 'prop-types';
import { AboutPageTemplate } from '../../templates/aboutPage/index';
import PreviewWrapper from '../../components/previewWrapper';

const AboutPagePreview = ({ entry, getAsset }) => {
  const entryHero = entry.getIn(['data', 'hero']);
  const hero = entryHero ? entryHero.toJS() : [];
  hero.backgroundImage = getAsset(
    entry.getIn(['data', 'hero', 'backgroundImage']),
  );

  const entryHistory = entry.getIn(['data', 'history']);
  const history = entryHistory ? entryHistory.toJS() : [];

  const entryEmployees = entry.getIn(['data', 'employees']);
  const employees = entryEmployees ? entryEmployees.toJS() : [];
  console.log(employees);
  return (
    <PreviewWrapper>
      <AboutPageTemplate
        hero={hero}
        history={history}
        employees={employees}
        buttonText={entry.getIn(['data', 'buttonText'])}
      />
    </PreviewWrapper>
  );
};

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default AboutPagePreview;
