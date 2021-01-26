import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
}).catch((error) => {
  console.error(`${'\x1b[31m'}[database] Mongoose connection error. ${error.message}`);
});

mongoose.connection.on('error', (error) => {
  console.error(`${'\x1b[31m'}[database] Mongoose connection error. ${error}`);
});

mongoose.connection.on('connected', () => {
  console.log(`${'\x1b[36m'}[database] Mongoose connected`);
});
