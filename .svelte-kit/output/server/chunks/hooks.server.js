import mongoose from "mongoose";
const db = "mongodb://localhost/spothop";
const mongoConnection = {
  isConnected: 0
};
const dbConnect = async () => {
  console.log("MONGO_URL", db);
  if (mongoConnection.isConnected === 1) {
    console.log("already connected");
    return;
  }
  if (mongoose.connections.length > 0) {
    mongoConnection.isConnected = mongoose.connections[0].readyState;
    if (mongoConnection.isConnected === 1) {
      console.log("using existing connection");
      return;
    }
    await mongoose.disconnect();
  }
  await mongoose.connect(db);
  mongoConnection.isConnected = 1;
  console.log("conected to ", db);
};
await dbConnect();
const handle = async ({ event, resolve }) => {
  const response = await resolve(event);
  return response;
};
export {
  handle
};
