const path = require('path');

const MONGO = "mongodb+srv://angel:Dark909107@cluster0.qam3d.mongodb.net/DBCourses?retryWrites=true&w=majority"

module.exports.getConfig = () => {
  const config = {
    'MODE': 'Development',
    'PORT': process.env.PORT || 17000,
    'MONGO_URL': process.env.MONGO_URL || MONGO,
    'UPLOAD_PATH': path.resolve(`${__dirname}/../uploads`),
    'JWT_SECRET': process.env.JWT_SECRET || 'R4ND0M5TR1NG'
  };

  // Modify for Production
  if (process.env.NODE_ENV === 'production') {
    config.MODE = 'Production';
  }

  return config;
};