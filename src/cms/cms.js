import CMS from 'netlify-cms';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import CareerPagePreview from './preview-templates/CareerPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';
import FooterPreview from './preview-templates/FooterPreview';
import NavbarPreview from './preview-templates/NavbarPreview';
import ResponsibleDisclosurePreview from './preview-templates/ResponsibleDisclosurePreview';

CMS.registerPreviewStyle('/styles.css');

CMS.registerPreviewTemplate('navbar', NavbarPreview);
CMS.registerPreviewTemplate('footer', FooterPreview);

// Norwegian
CMS.registerPreviewTemplate('norwegian_index_page', IndexPagePreview);
CMS.registerPreviewTemplate('norwegian_products_page', ProductPagePreview);
CMS.registerPreviewTemplate('norwegian_career_page', CareerPagePreview);
CMS.registerPreviewTemplate('norwegian_about_page', AboutPagePreview);
CMS.registerPreviewTemplate(
  'norwegian_responsibleDisclosure_page',
  ResponsibleDisclosurePreview,
);

// English
CMS.registerPreviewTemplate('english_index_page', IndexPagePreview);
CMS.registerPreviewTemplate('english_products_page', ProductPagePreview);
CMS.registerPreviewTemplate('english_career_page', CareerPagePreview);
CMS.registerPreviewTemplate('english_about_page', AboutPagePreview);
CMS.registerPreviewTemplate(
  'english_responsibleDisclosure_page',
  ResponsibleDisclosurePreview,
);
