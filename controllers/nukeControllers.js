function nuke (req, res) {
  db.Comment.remove(function (err, succ) {
    res.json(succ)
  })
}

module.exports = {
  nuke: nuke
}
