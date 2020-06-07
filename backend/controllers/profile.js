const handleProfile = (req, res, User) => {
  const id = req.params.userId;
  User.findById(id, (err, account) => {
    if (err) {
      res.status(404).json("Error: " + err);
    } else {
      res.json({
        name: account.name,
        email: account.email,
        entries: account.entries,
        joined: account.joined,
      });
    }
  });
};

module.exports = {
  handleProfile: handleProfile,
};
