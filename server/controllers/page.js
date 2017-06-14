module.exports.index = (req, res, next) => {
  res.render('index', {
    pageHeader: {
      title: 'Homepage',
      subtitle: 'Welcome to royal deck builder'
    }
  });
};

module.exports.about = (req, res, next) => {
  res.render('index', {
    pageHeader: {
      title: 'About',
      subtitle: 'A little about us'
    }
  });
};