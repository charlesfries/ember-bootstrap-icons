'use strict';

module.exports = {
  name: require('./package').name,

	// included(app) {
	// 	this._super.included.apply(this, arguments);

  //   app.import('node_modules/bootstrap-icons/font/bootstrap-icons.css');
  //   app.import('node_modules/bootstrap-icons/font/fonts/bootstrap-icons.woff', 'node_modules/bootstrap-icons/font/fonts/bootstrap-icons.woff?231ce25e89ab5804f9a6c427b8d325c9');
  //   app.import('node_modules/bootstrap-icons/font/fonts/bootstrap-icons.woff2', 'node_modules/bootstrap-icons/font/fonts/bootstrap-icons.woff2?231ce25e89ab5804f9a6c427b8d325c9');
  // }

	contentFor(section) {
    if (section === 'head') {
      return '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css">';
    }
  },
};
