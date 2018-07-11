/* eslint-disable import/no-extraneous-dependencies */
import Typography from 'typography';
/* eslint-enable import/no-extraneous-dependencies */

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.6,
  scaleRatio: 2.2,
  googleFonts: [
    {
      name: 'Noto Sans',
      styles: ['400', '700'],
    },
  ],
  headerFontFamily: ['Noto Sans', 'sans-serif'],
  bodyFontFamily: ['Noto Sans', 'sans-serif'],
  blockMarginBottom: '0',
});

export default typography;
