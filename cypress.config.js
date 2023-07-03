const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl :'https://practice.cydeo.com/', // base burda tanımlanıyor kalan kısmı url in devamı test içinde 
    video :false,
    retries: 0, //if it 2 , after fails it should run extra 2 times
    defaultCommandTimeout: 5000, // bu bekleme süresi bir elemente tıkladığında visible olması bekleme süresi
    viewportHeight: 800,
    viewportWidth: 1200,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
