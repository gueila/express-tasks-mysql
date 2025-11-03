const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);
const setupSwaggerDocs = (app) => {
  app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
};

module.exports = setupSwaggerDocs;
