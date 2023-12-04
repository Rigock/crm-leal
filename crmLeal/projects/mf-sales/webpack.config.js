const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfSales',

  exposes: {
    './SalesModule': './projects/mf-sales/src/app/sales/sales.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
  sharedMappings: [
    "@shared-lib"
  ],

});
