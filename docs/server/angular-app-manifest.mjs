
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'angular-crash-course',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZWV3VEJ5.js"
    ],
    "route": "/angular-crash-course/new-page"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 592, hash: '7d1bf1fd451bbf020132c8cf2fa37de63244f4ace331469311ea1b3bcdb0ca76', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1109, hash: 'ea508b64c2e04e82ce47de68c96f4a3919c85a711d89fbcae0d5bd99fdad97b8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'new-page/index.html': {size: 21007, hash: '38b733c6db9493bdd096953059aed86bbf614e192784f8a13f4604594928d515', text: () => import('./assets-chunks/new-page_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
