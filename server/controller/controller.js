const dummieData = [
  {
    name: 'Fat Cat',
    price: 5,
    id: 'A1',
    img: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-07/29/15/asset/buzzfeed-prod-web01/sub-buzz-16791-1469819248-1.jpg?downsize=715:*&output-format=auto&output-quality=auto'
  },
  {
    name: 'Lazy doggo',
    price: 90001,
    id: 'A2',
    img: 'http://i.imgur.com/eALERdA.jpg'
  }
];

module.exports = {
  getShelf(req, res) {
    console.log(req.params.shelfId);
    if(req.params.shelfId === 'A') {
      res.send(dummieData);
    } else {
      res.send([]);
    }
  },

  getBin(req, res) {
    res.send(dummieData[0]);
  }
};
