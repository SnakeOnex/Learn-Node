exports.homePage = (req, res) => {
  console.log(req.name);
  res.render('index', {
    title: "index"
  });
};


exports.addStore = (req, res) => {
  res.render('editStore', {
    title: "Add Store"
  });
};