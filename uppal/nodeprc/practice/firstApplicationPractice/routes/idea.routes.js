const ideaControllers = require('../controllers/idea.controllers');
exports.getROUTES = (app) => {
  app.get('/ideaApp/api/v1/ideas', ideaControllers.getIdea);
  app.get('/ideaApp/api/v1/ideas/:id', ideaControllers.getParticularIdea);
  app.post('/ideaApp/api/v1/ideas', ideaControllers.postIdea);
  app.put('/ideaApp/api/v1/ideas/:id', ideaControllers.updateIdea);
  app.delete('/ideaApp/api/v1/ideas/:id', ideaControllers.deleteIdea);
};
