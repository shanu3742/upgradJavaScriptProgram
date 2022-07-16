const ideas = require('../models/idea.models');

exports.getIdea = (req, res) => {
  res.status(200).send(ideas);
};

exports.getParticularIdea = (req, res) => {
  let id = req.params.id;
  let idea = ideas[id];
  if (ideas[id]) {
    res.status(200).send(idea);
  } else {
    res.status(400).send({
      message: 'idea not found in database',
    });
  }
};
var count = 2;
exports.postIdea = (req, res) => {
  req.body.id = ++count;
  ideas[req.body.id] = req.body;
  res.status(201).send(ideas);
};
exports.updateIdea = (req, res) => {
  let ideaId = req.params.id;
  req.body.id = ideaId;
  ideas[ideaId] = req.body;
  if (ideas[ideaId]) {
    res.status(200).send(ideas);
  } else {
    res.status(400).send({
      message: 'idea not found',
    });
  }
};

exports.deleteIdea = (req, res) => {
  let ideaId = req.params.id;
  if (ideas[ideaId]) {
    delete ideas[ideaId];
    res.status(200).send(ideas);
  } else {
    res.status(400).send({
      message: 'idea is not persent in database',
    });
  }
};
