const idea = require('../models/idea.models');

exports.getIdeas = (req, res) => {
  res.status(200).send(idea);
};
var count = 2;

exports.getIdeaBasedonPrams = (req, res) => {
  let ideaId = req.params.id;
  let paricularIdea = idea[ideaId];
  res.status(200).send(paricularIdea);
};

exports.createIdea = (req, res) => {
  req.body.id = ++count;
  idea[count] = req.body;
  res.status(201).send(idea);
};
exports.updateIdea = (req, res) => {
  let ideaId = req.params.id;
  const particularIdea = idea[ideaId];
  if (particularIdea) {
    idea[ideaId] = req.body;
    res.status(200).send(idea);
  } else {
    res.status(400).send({
      message: 'idea is not persent',
    });
  }
};
exports.deleteIdea = (req, res) => {
  let ideaId = req.params.id;
  if (idea[ideaId]) {
    delete idea[ideaId];
    res.status(200).send('idea deleted');
  } else {
    res.status(400).send({
      message: 'idea not persent',
    });
  }
};
