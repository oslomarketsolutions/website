import CMS from 'netlify-cms';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import EmployeePreview from './preview-templates/EmployeePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';

CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('norwegian_index_page', IndexPagePreview);
CMS.registerPreviewTemplate('english_index_page', IndexPagePreview);
CMS.registerPreviewTemplate('norwegian_employees', EmployeePreview);
CMS.registerPreviewTemplate('english_employees', EmployeePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
