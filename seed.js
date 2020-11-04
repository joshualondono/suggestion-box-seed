const mongoose = require('mongoose');
const Suggestions = require('./routes/Suggestions/model');
const seed = require('./suggestions.json');
require('dotenv').config();

const seedFunc = async () => {
  try {
    const data = await Suggestions.create(seed);
    const length = await data.length;
    console.log(`Records created`);
    await mongoose.disconnect();
    console.log('MongoDB Disconnected');
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

mongoose
  .connect('mongodb://localhost:27017/mydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log('MongoDB Connected');
    mongoose.connection.db.dropDatabase();
  })
  .then(() => {
    seedFunc();
  })
  .catch((err) => console.log(`MongoDB Error: ${err}`));

  