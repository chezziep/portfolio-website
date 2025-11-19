import { globalStyle } from '@vanilla-extract/css';

// Apply Rubik font globally - needs to override Braid's styles
globalStyle('body, body *', {
  fontFamily: "'Rubik', system-ui, -apple-system, sans-serif !important" as any,
  fontWeight: '300 !important' as any,
});

