const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl :'https://practice.cydeo.com/', // base burda tanımlanıyor kalan kısmı url in devamı test içinde 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
