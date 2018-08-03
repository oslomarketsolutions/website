import React from 'react';
import PropTypes from 'prop-types';
// As the norwegian and english index pages
// has the exact same code except for query
// we don't need two previews.
import IndexPageTemplate from '../../templates/indexPage';
import PreviewWrapper from '../../components/previewWrapper';

// This preview template is a little special because
// IndexPage doesn't have a template in its index.js-file.
// That means it takes in one prop (data) unlike the other pages (which has templates)
// that take in multiple props.
const IndexPagePreview = ({ entry, getAsset }) => {
  const customerLogo = entry
    .getIn(['data', 'transitionalElement', 'customerLogos'])
    .map(logo => ({
      logo: getAsset(logo.get('logo')),
      name: logo.get('name'),
    }));

  const customizationCards = entry
    .getIn(['data', 'customization', 'cards'])
    .map(card => ({
      header: card.get('header'),
      description: card.get('description'),
      features: card.get('features').toJS(),
      isDark: card.get('isDark'),
    }));

  const integrationLogo = entry
    .getIn(['data', 'customization', 'serviceIntegrations', 'integrationLogos'])
    .map(logo => ({
      logo: getAsset(logo.get('logo')),
      name: logo.get('name'),
    }));

  // Create the data object IndexPage expects
  const data = {
    imageSizes: { edges: [] },
    page: {
      frontmatter: {
        hero: {
          title: entry.getIn(['data', 'hero', 'title']),
          subtitle: entry.getIn(['data', 'hero', 'subtitle']),
        },
        transitionalElement: {
          numbersAndText: {
            companiesNumber: entry.getIn([
              'data',
              'transitionalElement',
              'numbersAndText',
              'companiesNumber',
            ]),
            companiesText: entry.getIn([
              'data',
              'transitionalElement',
              'numbersAndText',
              'companiesText',
            ]),
            usersNumber: entry.getIn([
              'data',
              'transitionalElement',
              'numbersAndText',
              'usersNumber',
            ]),
            usersText: entry.getIn([
              'data',
              'transitionalElement',
              'numbersAndText',
              'usersText',
            ]),
            text: entry.getIn([
              'data',
              'transitionalElement',
              'numbersAndText',
              'text',
            ]),
          },
          customerLogos: customerLogo,
        },
        investorPortal: {
          header: entry.getIn(['data', 'investorPortal', 'header']),
          image: getAsset(entry.getIn(['data', 'investorPortal', 'image'])),
          text: entry.getIn(['data', 'investorPortal', 'text']),
        },
        customization: {
          header: entry.getIn(['data', 'customization', 'header']),
          text: entry.getIn(['data', 'customization', 'text']),
          cards: customizationCards,
          serviceIntegrations: {
            header: entry.getIn([
              'data',
              'customization',
              'serviceIntegrations',
              'header',
            ]),
            text: entry.getIn([
              'data',
              'customization',
              'serviceIntegrations',
              'text',
            ]),
            integrationLogos: integrationLogo,
          },
        },
        otherProducts: {
          arena: {
            image: getAsset(
              entry.getIn(['data', 'otherProducts', 'arena', 'image']),
            ),
            header: entry.getIn(['data', 'otherProducts', 'arena', 'header']),
            text: entry.getIn(['data', 'otherProducts', 'arena', 'text']),
          },
          irModules: {
            image: getAsset(
              entry.getIn(['data', 'otherProducts', 'irModules', 'image']),
            ),
            header: entry.getIn([
              'data',
              'otherProducts',
              'irModules',
              'header',
            ]),
            text: entry.getIn(['data', 'otherProducts', 'irModules', 'text']),
          },
        },
      },
    },
  };

  return (
    <PreviewWrapper>
      <IndexPageTemplate data={data} />
    </PreviewWrapper>
  );
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
    get: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default IndexPagePreview;
