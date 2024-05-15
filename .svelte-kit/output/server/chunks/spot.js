import mongoose, { Schema, model } from "mongoose";
const { models: models$1 } = mongoose;
const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  admin: Boolean
});
const UserMongoose = models$1["User"] || model("User", userSchema);
const { models } = mongoose;
const spotSchema = new Schema({
  name: String,
  description: String,
  img: String,
  category: String,
  latitude: Number,
  longitude: Number,
  userid: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});
const SpotMongoose = models["Spot"] || model("Spot", spotSchema);
export {
  SpotMongoose as S,
  UserMongoose as U
};
