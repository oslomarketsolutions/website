import React from 'react';
import PropTypes from 'prop-types';
import { ProductPageTemplate } from '../../templates/productPage/index';
import PreviewWrapper from '../../components/previewWrapper';

const ProductPagePreview = ({ entry, getAsset }) => {
  const linkCards = entry
    .getIn(['data', 'linkCardsSection', 'linkCards'])
    .map(linkCard => ({
      header: linkCard.get('header'),
      description: linkCard.get('description'),
      linkText: linkCard.get('linkText'),
      isDark: linkCard.get('isDark'),
      icon: getAsset(linkCard.get('icon')),
    }));

  const linkCardsSection = {
    title: entry.getIn(['data', 'linkCardsSection', 'title']),
    linkCards,
  };

  const sectionHeaderInvestorPortal = {
    header: entry.getIn(['data', 'investorPortal', 'sectionHeader', 'header']),
    subHeader: entry.getIn([
      'data',
      'investorPortal',
      'sectionHeader',
      'subHeader',
    ]),
    text: entry.getIn(['data', 'investorPortal', 'sectionHeader', 'text']),
  };

  const marketData = {
    overline: entry.getIn(['data', 'investorPortal', 'marketData', 'overline']),
    header: entry.getIn(['data', 'investorPortal', 'marketData', 'header']),
    text: entry.getIn(['data', 'investorPortal', 'marketData', 'text']),
    desktopImage: getAsset(
      entry.getIn(['data', 'investorPortal', 'marketData', 'desktopImage']),
    ),
    tabletImage: getAsset(
      entry.getIn(['data', 'investorPortal', 'marketData', 'tabletImage']),
    ),
    mobileImage: getAsset(
      entry.getIn(['data', 'investorPortal', 'marketData', 'mobileImage']),
    ),
  };

  const trading = {
    overline: entry.getIn(['data', 'investorPortal', 'trading', 'overline']),
    header: entry.getIn(['data', 'investorPortal', 'trading', 'header']),
    text: entry.getIn(['data', 'investorPortal', 'trading', 'text']),
    desktopImage: getAsset(
      entry.getIn(['data', 'investorPortal', 'trading', 'desktopImage']),
    ),
    tabletImage: getAsset(
      entry.getIn(['data', 'investorPortal', 'trading', 'tabletImage']),
    ),
    mobileImage: getAsset(
      entry.getIn(['data', 'investorPortal', 'trading', 'mobileImage']),
    ),
  };

  const onlinePortfolio = {
    overline: entry.getIn([
      'data',
      'investorPortal',
      'onlinePortfolio',
      'overline',
    ]),
    header: entry.getIn([
      'data',
      'investorPortal',
      'onlinePortfolio',
      'header',
    ]),
    text: entry.getIn(['data', 'investorPortal', 'onlinePortfolio', 'text']),
    desktopImage: getAsset(
      entry.getIn([
        'data',
        'investorPortal',
        'onlinePortfolio',
        'desktopImage',
      ]),
    ),
    tabletImage: getAsset(
      entry.getIn(['data', 'investorPortal', 'onlinePortfolio', 'tabletImage']),
    ),
    mobileImage: getAsset(
      entry.getIn(['data', 'investorPortal', 'onlinePortfolio', 'mobileImage']),
    ),
  };

  const integrationsLogos = entry
    .getIn([
      'data',
      'investorPortal',
      'serviceIntegrations',
      'integrationsLogos',
    ])
    .map(integrationLogo => ({
      logo: getAsset(integrationLogo.get('logo')),
      name: integrationLogo.get('name'),
    }));

  const serviceIntegrations = {
    header: entry.getIn([
      'data',
      'investorPortal',
      'serviceIntegrations',
      'header',
    ]),
    text: entry.getIn([
      'data',
      'investorPortal',
      'serviceIntegrations',
      'text',
    ]),
    integrationsLogos,
  };

  const investorPortal = {
    sectionHeader: sectionHeaderInvestorPortal,
    marketData,
    trading,
    onlinePortfolio,
    serviceIntegrations,
  };

  const sectionHeaderStandardProducts = {
    header: entry.getIn([
      'data',
      'standardProducts',
      'sectionHeader',
      'header',
    ]),
    subHeader: entry.getIn([
      'data',
      'standardProducts',
      'sectionHeader',
      'subHeader',
    ]),
    text: entry.getIn(['data', 'standardProducts', 'sectionHeader', 'text']),
  };

  const arena = {
    header: entry.getIn(['data', 'standardProducts', 'arena', 'header']),
    desktopImage: getAsset(
      entry.getIn(['data', 'standardProducts', 'arena', 'desktopImage']),
    ),
    tabletImage: getAsset(
      entry.getIn(['data', 'standardProducts', 'arena', 'tabletImage']),
    ),
    mobileImage: getAsset(
      entry.getIn(['data', 'standardProducts', 'arena', 'mobileImage']),
    ),
    text: entry.getIn(['data', 'standardProducts', 'arena', 'text']),
    buttonText: entry.getIn([
      'data',
      'standardProducts',
      'arena',
      'buttonText',
    ]),
  };

  const irModules = {
    header: entry.getIn(['data', 'standardProducts', 'irModules', 'header']),
    desktopImage: getAsset(
      entry.getIn(['data', 'standardProducts', 'irModules', 'desktopImage']),
    ),
    tabletImage: getAsset(
      entry.getIn(['data', 'standardProducts', 'irModules', 'tabletImage']),
    ),
    mobileImage: getAsset(
      entry.getIn(['data', 'standardProducts', 'irModules', 'mobileImage']),
    ),
    text: entry.getIn(['data', 'standardProducts', 'irModules', 'text']),
    buttonText: entry.getIn([
      'data',
      'standardProducts',
      'irModules',
      'buttonText',
    ]),
  };

  const standardProducts = {
    sectionHeader: sectionHeaderStandardProducts,
    arena,
    irModules,
  };

  const sectionHeaderServices = {
    header: entry.getIn(['data', 'services', 'sectionHeader', 'header']),
    subHeader: entry.getIn(['data', 'services', 'sectionHeader', 'subHeader']),
    text: entry.getIn(['data', 'services', 'sectionHeader', 'text']),
  };

  const feedAPI = {
    header: entry.getIn(['data', 'services', 'feedAPI', 'header']),
    desktopImage: getAsset(
      entry.getIn(['data', 'services', 'feedAPI', 'desktopImage']),
    ),
    tabletImage: getAsset(
      entry.getIn(['data', 'services', 'feedAPI', 'tabletImage']),
    ),
    mobileImage: getAsset(
      entry.getIn(['data', 'services', 'feedAPI', 'mobileImage']),
    ),
    text: entry.getIn(['data', 'services', 'feedAPI', 'text']),
    buttonText: entry.getIn(['data', 'services', 'feedAPI', 'buttonText']),
  };

  const omsComponents = {
    header: entry.getIn(['data', 'services', 'omsComponents', 'header']),
    desktopImage: getAsset(
      entry.getIn(['data', 'services', 'omsComponents', 'desktopImage']),
    ),
    tabletImage: getAsset(
      entry.getIn(['data', 'services', 'omsComponents', 'tabletImage']),
    ),
    mobileImage: getAsset(
      entry.getIn(['data', 'services', 'omsComponents', 'mobileImage']),
    ),
    text: entry.getIn(['data', 'services', 'omsComponents', 'text']),
    buttonText: entry.getIn([
      'data',
      'services',
      'omsComponents',
      'buttonText',
    ]),
  };

  const services = {
    sectionHeader: sectionHeaderServices,
    feedAPI,
    omsComponents,
  };

  return (
    <PreviewWrapper>
      <ProductPageTemplate
        linkCardsSection={linkCardsSection}
        investorPortal={investorPortal}
        standardProducts={standardProducts}
        services={services}
      />
    </PreviewWrapper>
  );
};

ProductPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
    get: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default ProductPagePreview;
