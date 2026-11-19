const { defineConfig } = require("cypress");


module.exports = defineConfig({
  video:true,
  screenshotOnRunFailure:true,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
   
    },
    baseUrl: "https://www.saucedemo.com/",
    watchForFileChanges: false,
  },
});
