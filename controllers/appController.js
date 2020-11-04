let data = require('../models/dataArray');

module.exports = {
    getAllSuggestions: (req, res) => {
        return res.status(200).json({ confirmation: 'success', data });
      }, 

    byNameSuggestions: (req, res) => {
        let foundData = data.filter((dataObj) => {
          if (dataObj.name === req.params.name) {
            return res.status(200).json({ confirmation: 'success', reqVal });
          }
        });
        if (!foundData.length)
          return res
            .status(400)
            .json({ confirmation: 'fail', message: 'that data was not found' });
      },

      singleSuggestion: (req, res) => {
        let foundData = data.filter((dataObj) => {
          if (dataObj.id === req.params.id) {
            return res.status(200).json({ confirmation: 'success', dataObj });
          }
        });
        if (!foundData.length)
          return res
            .status(400)
            .json({ confirmation: 'fail', message: 'that data was not found' });
      },

      createSuggestion: (req, res) => {
        //validate inputs
        if (!req.body.name || !req.body.email || !req.body.password) {
          return res
            .status(400)
            .json({ confirmation: 'fail', message: 'All Inputs Must Be filled' });
        }
      
        //check if data exist
        let existingData = data.filter(
          (foundData) => foundData.email === req.body.email
        );
        if (existingData.length) {
          return res.status(400).send('data already exists');
        }
      
        //create a new data object
    // { id: '1', name: 'jd', email: 'jd@me.com', password: '123' }      
        const newdata = {};
      
        newdata.name = req.body.name;
        newdata.email = req.body.email;
        newdata.password = req.body.password;
        newdata.id = String(data.length + 1);
        // add user to array
        data.push(newdata);
        //return the new user
        return res.status(200).json({ confirmation: 'data created', newdata });
      }
}