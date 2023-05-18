const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
const connectDb = async () => {
  try {
    await mongoose.connect("mongodb+srv://sakethinnani:fqusDFLYUkIRD4aJ@cluster0.5f4o2lb.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('### Mongo DB connected...');
  } catch (err) {
    console.log(err);
    // Quit server if db connection fails
    process.exit(1);
  }
};

module.exports = connectDb;
