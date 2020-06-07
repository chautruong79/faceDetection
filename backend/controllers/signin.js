const handleSignin = (req, res, bcrypt, User) => {
  const email = req.body.email;
  const passwordInput = req.body.password;
  User.findOne({ email: email }, (err, account) => {
    if (err) {
      res.status(400).json("Error: " + err);
    } else if (!account) {
      res.json("Email incorrect");
    } else {
      // @ts-ignore
      bcrypt.compare(passwordInput, account.password).then((result) => {
        if (result) {
          res.json({
            id: account._id,
            name: account.name,
            email: account.email,
            entries: account.entries,
            joined: account.joined,
          });
        } else {
          res.json("Password incorrect");
        }
      });
    }
  });
};

module.exports = {
  handleSignin: handleSignin,
};
