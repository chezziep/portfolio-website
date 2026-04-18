import { renderToString } from 'react-dom/server';
import type { Render } from 'sku';
import seekJobs from 'braid-design-system/themes/seekJobs';

import App from './App/App';

const seekSansHeadTags = seekJobs.webFonts.map((f) => f.linkTag).join('\n');

interface RenderContext {
  appHtml: string;
}

const skuRender: Render<RenderContext> = {
  renderApp: ({ SkuProvider }) => {
    const appHtml = renderToString(
      <SkuProvider>
        <App />
      </SkuProvider>,
    );

    return {
      appHtml,
    };
  },

  provideClientContext: () => ({}),

  renderDocument: ({ app, bodyTags, headTags }) => `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="preconnect" href="https://www.seek.com.au" />
        ${seekSansHeadTags}
        ${headTags}
      </head>
      <body>
        <div id="app">${app.appHtml}</div>
        ${bodyTags}
      </body>
    </html>
  `,
};

export default skuRender;
