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
        <title>Cheryl Paulsen — Principal Product Designer</title>
        <meta name="description" content="Portfolio of Cheryl Paulsen, Principal Product Designer at SEEK and member of the Braid design system team. Designer bridging design and technology.">
        <link rel="preconnect" href="https://miro.medium.com" />
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
