const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl :'https://practice.cydeo.com/', // base burda tanımlanıyor kalan kısmı url in devamı test içinde 
    video :false,
    retries: 0, //if it 2 , after fails it should run extra 2 times 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
