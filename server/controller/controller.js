module.exports = {
  getShelf(req, res) {
    const db = req.app.get('db');

    db.get_shelf([`${req.params.id}%`])
      .then((shelfs) => { res.send(shelfs); })
      .catch((err) => { console.log(err); });
  },

  getBin(req, res) {
    const db = req.app.get('db');

    db.get_bin([req.params.id])
      .then((bin) => { res.send(bin[0]); })
      .catch((err) => { console.log(err); });
  },

  createBin(req, res) {
    console.log(req.body);
    const db = req.app.get('db');

    const { img, name, price } = req.body;

    db.create_item([req.params.id, img, name, price])
      .then((bin) => { res.send(bin[0]); })
      .catch((err) => { console.log(err); });
  }
};
