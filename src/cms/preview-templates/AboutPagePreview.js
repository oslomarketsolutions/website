import React from 'react';
import PropTypes from 'prop-types';
import { AboutPageTemplate } from '../../templates/aboutPage/index';
import PreviewWrapper from '../../components/previewWrapper';

const AboutPagePreview = ({ entry, getAsset }) => {
  // I don't think we have access to the perklist through the CMS preview,
  // it's fetched by a query in careerPage/index.js
  const employeeList = [
    {
      node: {
        frontmatter: {
          title: 'Tine Charlotte Holm',
          jobTitle: 'CEO',
          description: 'Disse kortene redigeres på egen side',
          image: '/img/tine.png',
          jobType: 'management',
        },
      },
    },
  ];

  return (
    <PreviewWrapper>
      <AboutPageTemplate
        title={entry.getIn(['data', 'title'])}
        image={getAsset(entry.getIn(['data', 'image']))}
        imageAlt={entry.getIn(['data', 'imageAlt'])}
        text={entry.getIn(['data', 'text'])}
        header={entry.getIn(['data', 'header'])}
        employeeList={employeeList}
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
