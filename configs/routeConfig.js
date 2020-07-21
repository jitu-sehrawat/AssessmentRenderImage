const featureOneRoute = require('../featureOne/featureOne.route');
const renderRoute = require('../render/render.route');

module.exports = (app) => {
  app.use('/myApp/api/v1/featureOneRoutes', featureOneRoute);
  app.use('/render', renderRoute);
};
