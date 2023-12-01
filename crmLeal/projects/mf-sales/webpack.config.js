const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfSales',

  // Se puede exportar el componente a modo Standalone, 
  // como en video minuto 43, o se puede exportar 
  // como modulo igual que el anterior MF

  exposes: {
    './SalesComponent': './projects/mf-sales/src/app/app.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
  sharedMappings: [
    "@shared-lib"
  ],

});
