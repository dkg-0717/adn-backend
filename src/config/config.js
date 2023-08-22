const path = require('path');

const MONGO = "mongodb+srv://angel:Dark909107@cluster0.qam3d.mongodb.net/adn?retryWrites=true&w=majority"

module.exports.getConfig = () => {
  const config = {
    'MODE': 'Development',
    'PORT': process.env.PORT || 17000,
    'MONGO_URL': process.env.MONGO_URL || MONGO
  };

  // Modify for Production
  if (process.env.NODE_ENV === 'production') {
    config.MODE = 'Production';
  }

  return config;
};