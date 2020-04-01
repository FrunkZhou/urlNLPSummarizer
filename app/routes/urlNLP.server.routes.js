module.exports = function(app) {
  var nlp = require("../controllers/urlNLP.server.controller");

  app.route("/").get(nlp.renderURLForm);

  app
    .route("/processNLP")
    .get(nlp.scrapeURL, nlp.processText, nlp.renderResult);

  app
    .route("/api/processNLP")
    .get(nlp.scrapeURL, nlp.processText, nlp.renderResultJson);
};
