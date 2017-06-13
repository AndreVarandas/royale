module.exports.index = (req, res, next) => {
  res.render('index', { title: 'Homepage' });
};

module.exports.about = (req, res, next) => {
  res.render('index', { title: 'About' });
};