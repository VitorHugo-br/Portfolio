
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 33093, hash: '01e7761b452b3a5dbed1dd0be8fcb4ba5eaffac5c84e562f3ce62df6cf6f00fd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17175, hash: '129c71a555a0c0d80530c1dd62b89c2e090c6932929f3ba1afa638c8a626ae22', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 61650, hash: '5bf42d035281a27e143b943bb9d7b7b323bcb4e643602f7505846eb3796c96a6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-SVGZR3UJ.css': {size: 40498, hash: 'uNoEcjL0jPs', text: () => import('./assets-chunks/styles-SVGZR3UJ_css.mjs').then(m => m.default)}
  },
};
