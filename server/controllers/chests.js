
module.exports.index = (req, res, next) => {
  res.status(200).render('chests', {
    title: 'Chests',
     pageHeader: {
      title: 'Chests',
      subtitle: 'Check out available chests'
    }
  });
};