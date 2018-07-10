import CMS from 'netlify-cms';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import EmployeePreview from './preview-templates/EmployeePreview';
import FeaturePreview from './preview-templates/FeaturePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';
import PerkPreview from './preview-templates/PerkPreview';

CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('norwegian_index_page', IndexPagePreview);
CMS.registerPreviewTemplate('english_index_page', IndexPagePreview);
CMS.registerPreviewTemplate('norwegian_employees', EmployeePreview);
CMS.registerPreviewTemplate('english_employees', EmployeePreview);
CMS.registerPreviewTemplate('norwegianPerks', PerkPreview);
CMS.registerPreviewTemplate('englishPerks', PerkPreview);
CMS.registerPreviewTemplate('english_featureCard', FeaturePreview);
CMS.registerPreviewTemplate('norwegian_featureCard', FeaturePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
