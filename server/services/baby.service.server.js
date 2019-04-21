module.exports = function (app) {

  // get hold of the baby model
  const babyModel = require('../models/baby/baby.model.server');

// the http calls

// find baby by Id
  app.get("/api/baby/:bid", function (req, res) {
    const babyId = req.params.bid;
    console.log("Baby Id to query: " + babyId);
    babyModel.findBabyById(babyId).exec((err, baby) => {
      if (err) {
        console.log('Error finding baby by id!');
        res.status(400).send(err);
      } else {
        console.log('Found the baby with id: ' + babyId);
        res.status(200).json(baby);
      }
    });
  });

// to get all the babies
  app.get('/api/babies', (req, res) => {
    console.log('Getting all babies...');
    babyModel.findAllBabies().exec((err, babies) => {
      if (err) {
        console.log('Error getting all babies!');
      } else {
        res.status(200).json(babies);
      }
    });
  });

  // to update the baby given baby Id
  app.put("/api/baby/:bid", function (req, res) {
    const babyId = req.params.bid;
    const newBaby = req.body;
    console.log("New baby Id: " + babyId + ", and new baby: ");
    console.log(newBaby);
    babyModel.updateBaby(babyId, newBaby).exec((err, updatedBaby) => {
      if (err) {
        console.log('Error updating the baby with babyId: ' + babyId);
        res.status(400).send(err);
      } else {
        if (updatedBaby) {
          console.log('Finished updating the baby.');
          res.status(200).json(updatedBaby);
        } else {
          console.log('Cannot find the baby given babyId: ' + babyId);
          res.send(null);
        }
      }
    });
  });

  // to delete the baby given baby Id
  app.delete("/api/baby/:bid", function (req, res) {
    const babyId = req.params.bid;
    console.log("Baby Id to delete: " + babyId);
    babyModel.deleteBaby(babyId).exec((err, deletedBaby) => {
      if (err) {
        console.log('Error deleting the baby given babyId: ' + babyId);
        res.status(400).send(err);
      } else {
        if (deletedBaby) {
          console.log('Finished deleting the baby given babyId: ' + babyId);
          res.status(200).json(deletedBaby);
        } else {
          console.log('Cannot find the baby given babyId: ' + babyId);
          res.send(null);
        }
      }
    });
  });

  // to create a new baby
  app.post('/api/baby', (req, res) => {
    const newBaby = req.body;
    console.log('Posted new baby: ');
    console.log(newBaby);
    babyModel.createBaby(newBaby).then(
      (postedBaby) => {
        console.log('Finished posting the new baby.');
        res.status(200).json(postedBaby);
      },
      (err) => {
        console.log('Error posting the new baby!');
        res.status(400).send(err);
      }
    );
  });
};
