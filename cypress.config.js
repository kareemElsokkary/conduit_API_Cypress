//const { defineConfig } = require('cypress');
module.exports = {
viewportHeight:1000,
viewportWidth:1620,
chromeWebSecurity: false,
video:false,

  e2e: {
    CYPRESS_CACHE_DISABLED: true,
      watchForFileChanges: false,
 baseUrl:'https://conduit.bondaracademy.com/',
  specPattern:'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
