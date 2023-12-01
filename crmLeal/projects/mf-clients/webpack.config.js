const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfClients',

  exposes: {
    './ClientsModule': './projects/mf-clients/src/app/clients/clients.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
  sharedMappings: [
    "@shared-lib"
  ],
});
