const nextApp = require('../../index');
const pagesController = {};

pagesController.returnToPublicPage = (req, res) => {
  if (req.cookies.token) {
    if (req.url !== '/') {
      res.redirect('/');
    } else {
      nextApp.render(req, res, req.url, req.query);
    }
  } else {
    nextApp.render(req, res, req.url, req.query);
  }
};

pagesController.returnToPrivatePage = (req, res) => {
  if (req.cookies.token) {
    nextApp.render(req, res, req.url, req.query);
  } else {
    if (req.url !== '/') {
      res.redirect('/');
    } else {
      nextApp.render(req, res, req.url, req.query);
    }
  }
};

pagesController.returnPage = (req, res) => {
  nextApp.render(req, res, req.url, req.query);
};

module.exports = pagesController;
