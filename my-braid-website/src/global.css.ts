import { globalStyle } from '@vanilla-extract/css';

// Apply Rubik font globally - needs to override Braid's styles
globalStyle('body, body *', {
  fontFamily: "'Rubik', system-ui, -apple-system, sans-serif !important" as any,
  fontWeight: '300 !important' as any,
});

globalStyle('body h1, h2, h3, h4, h5, h6', {
  fontWeight: '400 !important' as any,
});
