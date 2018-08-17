/* eslint no-underscore-dangle: ["error", { "allow": ["_tail",] }] */
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
  const customerLogos = entry
    .getIn(['data', 'transitionalElement', 'customerLogos'])
    .map(customerLogo => ({
      logo: getAsset(customerLogo.get('logo')),
      name: customerLogo.get('name'),
    }));

  const investorPortalImages = entry
    .getIn(['data', 'investorPortal', 'investorPortalImages'])
    .map(investorPortalImage => ({
      image: getAsset(investorPortalImage.get('image')),
      name: investorPortalImage.get('name'),
    }));

  const customizationCards = entry
    .getIn(['data', 'customization', 'cards'])
    .map(card => ({
      header: card.get('header'),
      description: card.get('description'),
      features: card.get('features'),
      isDark: card.get('isDark'),
    }));

  const integrationLogos = entry
    .getIn(['data', 'customization', 'serviceIntegrations', 'integrationLogos'])
    .map(integrationLogo => ({
      logo: getAsset(integrationLogo.get('logo')),
      name: integrationLogo.get('name'),
    }));

  // Create the data object IndexPage expects
  const data = {
    imageSizes: { edges: [] },
    page: {
      frontmatter: {
        hero: {
          title: entry.getIn(['data', 'hero', 'title']),
          subtitle: entry.getIn(['data', 'hero', 'subtitle']),
          buttonText: entry.getIn(['data', 'hero', 'buttonText']),
        },
        transitionalElement: {
          socialMediaText: entry.getIn([
            'data',
            'transitionalElement',
            'socialMediaText',
          ]),
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
          customerLogos: customerLogos._tail.array,
        },
        investorPortal: {
          header: entry.getIn(['data', 'investorPortal', 'header']),
          investorPortalImages,
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
            integrationLogos,
          },
        },
        otherProducts: {
          arena: {
            image: getAsset(
              entry.getIn(['data', 'otherProducts', 'arena', 'image']),
            ),
            header: entry.getIn(['data', 'otherProducts', 'arena', 'header']),
            text: entry.getIn(['data', 'otherProducts', 'arena', 'text']),
            buttonText: entry.getIn([
              'data',
              'otherProducts',
              'arena',
              'buttonText',
            ]),
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
            buttonText: entry.getIn([
              'data',
              'otherProducts',
              'irModules',
              'buttonText',
            ]),
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
