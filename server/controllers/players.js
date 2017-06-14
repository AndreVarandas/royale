module.exports.index = (req, res, next) => {
  res.status(200).render('players', {
    pageHeader: {
      title: 'Players',
      subtitle: 'Check player levels'
    },
  });
}