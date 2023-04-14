require("dotenv").config();

const config = {
  development: {
    port: process.env.DEV_PORT || 3333,
    api_key: process.env.DEV_API_KEY,
    database_url: process.env.DEV_DATABASE_URL,
    upload_image_route: process.env.UPLOAD_IAMGE_ROUTE,
    // Add other keys for development environment
  },
  production: {
    port: process.env.PROD_PORT || 5000,
    api_key: process.env.PROD_API_KEY,
    database_url: process.env.PROD_DATABASE_URL,
    upload_image_route: process.env.UPLOAD_IAMGE_ROUTE,
    // Add other keys for production environment
  },
  testing: {
    port: process.env.TEST_PORT || 8000,
    api_key: process.env.TEST_API_KEY,
    database_url: process.env.TEST_DATABASE_URL,
    upload_image_route: process.env.UPLOAD_IAMGE_ROUTE,
    // Add other keys for testing environment
  },
};

module.exports = config;
