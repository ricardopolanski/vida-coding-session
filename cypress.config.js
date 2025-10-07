const { defineConfig } = require("cypress");

const urls = {
  dev: 'https://viewer.ohif.org',
  stagin: 'https://staginviewer.ohif.org',
  prod: 'https://prod-viewer.ohif.org',
};

const selectedEnv = process.env.ENV;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: urls[selectedEnv],
  },
});
