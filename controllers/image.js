const Clarifai = require("clarifai");

const handleAPICall = (req, res, apiKey) => {
  const app = new Clarifai.App({
    apiKey: apiKey,
  });
  const type = req.body.type;
  if (type === "face") {
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
      .then((data) => res.json(data))
      .catch((err) => res.status(404).json("Error: " + err));
  } else if (type === "cele") {
    app.models
      .predict(Clarifai.CELEBRITY_MODEL, req.body.input)
      .then((data) => res.json(data))
      .catch((err) => res.status(404).json("Error: " + err));
  } else if (type === "demo") {
    app.models
      .predict(Clarifai.DEMOGRAPHICS_MODEL, req.body.input)
      .then((data) => res.json(data))
      .catch((err) => res.status(404).json("Error: " + err));
  }
};

const handleImage = (req, res, User) => {
  const id = req.body.id;
  User.findByIdAndUpdate(id, { $inc: { entries: 1 } }, (err, response) => {
    if (err) {
      res.status(404).json("Error: " + err);
    } else {
      res.json(response.entries + 1);
    }
  });
};

module.exports = {
  handleImage: handleImage,
  handleAPICall: handleAPICall,
};
