import mongoose from 'mongoose';

mongoose.connect(process.env.DBURL);

const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});
