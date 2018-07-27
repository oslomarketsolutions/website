import CMS from 'netlify-cms';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import CareerPagePreview from './preview-templates/CareerPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import EmployeePreview from './preview-templates/EmployeePreview';
import FeaturePreview from './preview-templates/FeaturePreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';
import PerkPreview from './preview-templates/PerkPreview';
import FooterPreview from './preview-templates/FooterPreview';
import ResponsibleDisclosurePreview from './preview-templates/ResponsibleDisclosurePreview';
import NewsPagePreview from './preview-templates/NewsPagePreview';

CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('norwegian_about_page', AboutPagePreview);
CMS.registerPreviewTemplate('english_about_page', AboutPagePreview);
CMS.registerPreviewTemplate('norwegian_index_page', IndexPagePreview);
CMS.registerPreviewTemplate('english_index_page', IndexPagePreview);
CMS.registerPreviewTemplate('norwegian_career_page', CareerPagePreview);
CMS.registerPreviewTemplate('english_career_page', CareerPagePreview);
CMS.registerPreviewTemplate('norwegian_employees', EmployeePreview);
CMS.registerPreviewTemplate('english_employees', EmployeePreview);
CMS.registerPreviewTemplate('norwegianPerks', PerkPreview);
CMS.registerPreviewTemplate('englishPerks', PerkPreview);
CMS.registerPreviewTemplate('english_featureCard', FeaturePreview);
CMS.registerPreviewTemplate('norwegian_featureCard', FeaturePreview);
CMS.registerPreviewTemplate('norwegian_products_page', ProductPagePreview);
CMS.registerPreviewTemplate('english_products_page', ProductPagePreview);
CMS.registerPreviewTemplate(
  'norwegian_responsibleDisclosure_page',
  ResponsibleDisclosurePreview,
);
CMS.registerPreviewTemplate(
  'english_responsibleDisclosure_page',
  ResponsibleDisclosurePreview,
);
CMS.registerPreviewTemplate('norwegian_news', NewsPagePreview);
CMS.registerPreviewTemplate('english_news', NewsPagePreview);
CMS.registerPreviewTemplate('footer', FooterPreview);
