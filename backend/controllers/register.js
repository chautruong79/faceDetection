const handleRegister = (req, res, bcrypt, User, saltRounds) => {
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hash,
      entries: 0,
      joined: new Date(),
    });
    newUser.save((err) => {
      if (!err) {
        res.json({
          id: newUser._id,
          name: req.body.name,
          email: req.body.email,
          entries: newUser.entries,
          joined: newUser.joined,
        });
      } else {
        res.status(400).json("Error: " + err);
      }
    });
  });
};

module.exports = {
  handleRegister: handleRegister,
};
