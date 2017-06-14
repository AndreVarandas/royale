module.exports.index = (req, res, next) => {
  res.status(200).render('leagues', {
    title: 'Leagues',
     pageHeader: {
      title: 'Leagues',
      subtitle: 'Check out available leagues'
    }
  });
};