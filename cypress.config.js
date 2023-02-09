const { defineConfig } = require("cypress");
module.exports = defineConfig({
  env: {
    MAILSLURP_API_KEY:
      "0c6c062b2edadfbe113833087e44010b0a6f3b0eec6bc4498fa824b7e3e0976c",
  },
  e2e: {
    defaultCommandTimeout: 40000,
    responseTimeout: 40000,
    requestTimeout: 40000,
  },
});