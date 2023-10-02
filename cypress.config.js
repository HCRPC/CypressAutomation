const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl :'https://practice.cydeo.com/', // base burda tanımlanıyor kalan kısmı url in devamı test içinde 
    env:{
      login :"/login",
      apiURL :"https://demoqa.com",
      apiBooks:"/BookStore/v1/Books",
      generateUser : "/Account/v1/User",
      generateToken : "/Account/v1/GenerateToken",
      loginAPI :"/Account/v1/Login"
    },
    video :false,
    retries: 1, //if it 2 , after fails it should run extra 2 times
    defaultCommandTimeout: 5000, // bu bekleme süresi bir elemente tıkladığında visible olması bekleme süresi
    viewportHeight: 800,
    viewportWidth: 1200,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
