const { default: mongoose } = require('mongoose');

mongoose.set('strictQuery', true);

const dbConnect = () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log('Base de données connectée');
  } catch (error) {
    console.log('Erreur base de données');
  }
};

module.exports = dbConnect;
