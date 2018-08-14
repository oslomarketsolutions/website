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
      isDark: linkCard.get('isDark'),
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
    image: getAsset(
      entry.getIn(['data', 'investorPortal', 'marketData', 'image']),
    ),
  };

  const trading = {
    overline: entry.getIn(['data', 'investorPortal', 'trading', 'overline']),
    header: entry.getIn(['data', 'investorPortal', 'trading', 'header']),
    text: entry.getIn(['data', 'investorPortal', 'trading', 'text']),
    image: getAsset(
      entry.getIn(['data', 'investorPortal', 'trading', 'image']),
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
    image: getAsset(
      entry.getIn(['data', 'investorPortal', 'onlinePortfolio', 'image']),
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
    image: getAsset(
      entry.getIn(['data', 'standardProducts', 'arena', 'image']),
    ),
    text: entry.getIn(['data', 'standardProducts', 'arena', 'text']),
  };

  const irModules = {
    header: entry.getIn(['data', 'standardProducts', 'irModules', 'header']),
    image: getAsset(
      entry.getIn(['data', 'standardProducts', 'irModules', 'image']),
    ),
    text: entry.getIn(['data', 'standardProducts', 'irModules', 'text']),
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
    image: getAsset(entry.getIn(['data', 'services', 'feedAPI', 'image'])),
    text: entry.getIn(['data', 'services', 'feedAPI', 'text']),
  };

  const omsComponents = {
    header: entry.getIn(['data', 'services', 'omsComponents', 'header']),
    image: getAsset(
      entry.getIn(['data', 'services', 'omsComponents', 'image']),
    ),
    text: entry.getIn(['data', 'services', 'omsComponents', 'text']),
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
