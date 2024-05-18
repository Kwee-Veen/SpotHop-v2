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
const userStore = {
  async getAllUsers() {
    const users = await UserMongoose.find().lean();
    return users;
  },
  async addUser(user) {
    try {
      let newUser = new UserMongoose(user);
      const userList = await this.getAllUsers();
      if (userList) {
        if (userList.length <= 0) {
          newUser.admin = true;
        }
      } else
        newUser.admin = false;
      const userObj = await newUser.save();
      const u = await this.getUserById(userObj._id);
      return u;
    } catch (error) {
      console.error("Error adding user - " + error);
      return null;
    }
  },
  async getUserById(id) {
    if (id) {
      try {
        let user = await UserMongoose.findOne({ _id: id }).lean();
        if (user === void 0)
          user = null;
        return user;
      } catch (error) {
        console.log("Error getting user by id: bad params");
        return null;
      }
    }
    console.log("Error getting user by id: no id provided");
    return null;
  },
  async getUserByEmail(userEmail) {
    if (userEmail) {
      try {
        let user = await UserMongoose.findOne({ email: userEmail }).lean();
        if (user === void 0)
          user = null;
        return user;
      } catch (error) {
        console.log(userEmail);
        console.log("Error getting user by email: bad params");
        return null;
      }
    }
    console.log("Error getting user by email: no email provided");
    return null;
  },
  async deleteUserById(id) {
    try {
      await UserMongoose.deleteOne({ _id: id });
    } catch (error) {
      console.log("Error deleting user: bad id");
    }
  },
  async deleteAll() {
    await UserMongoose.deleteMany({});
  },
  async updateUser(id, updatedUserData) {
    try {
      await UserMongoose.updateOne({ _id: id }, { $set: { firstName: updatedUserData.firstName } });
      await UserMongoose.updateOne({ _id: id }, { $set: { lastName: updatedUserData.lastName } });
      await UserMongoose.updateOne({ _id: id }, { $set: { email: updatedUserData.email } });
      await UserMongoose.updateOne({ _id: id }, { $set: { password: updatedUserData.password } });
      const user = this.getUserById(id);
      console.log("User details after update: " + user);
      return user;
    } catch (error) {
      console.error("Error updating user - " + error);
      return null;
    }
  }
};
const { models } = mongoose;
const spotSchema = new Schema({
  name: String,
  description: String,
  img: [],
  category: String,
  latitude: Number,
  longitude: Number,
  userid: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});
const SpotMongoose = models["Spot"] || model("Spot", spotSchema);
const spotStore = {
  async getAllSpots() {
    const spots = await SpotMongoose.find().lean();
    return spots;
  },
  async addSpot(spot, userid) {
    if (spot) {
      try {
        if (!spot.userid) {
          spot.userid = userid;
        }
        let newSpot = new SpotMongoose({ ...spot });
        const spotObj = await newSpot.save();
        const u = await this.getSpotById(spotObj._id);
        return u;
      } catch (error) {
        console.log("Error adding spot: bad params");
        return null;
      }
    }
    console.log("Error adding spot: no spot provided");
    return null;
  },
  async getUserSpots(useridArg) {
    if (useridArg) {
      try {
        const foundSpot = await SpotMongoose.find({ userid: useridArg }).lean();
        if (foundSpot === void 0)
          return null;
        return foundSpot;
      } catch (error) {
        console.log("Error getting spot by userid: bad params");
        return null;
      }
    }
    console.log("Error getting spot by userid: no userid provided");
    return null;
  },
  async getSpotById(id) {
    if (id) {
      try {
        let foundSpot = await SpotMongoose.findOne({ _id: id }).lean();
        if (foundSpot === void 0)
          foundSpot = null;
        return foundSpot;
      } catch (error) {
        console.log("Error getting spot by _id: bad params");
        return null;
      }
    }
    console.log("Error getting spot by _id: no _id provided");
    return null;
  },
  async getSpotsByCategory(categoryArg) {
    if (categoryArg) {
      try {
        const foundSpots = await SpotMongoose.find({ category: categoryArg }).lean();
        if (!foundSpots) {
          return null;
        }
        return foundSpots;
      } catch (error) {
        console.log("Error getting spot by category: bad params");
        return null;
      }
    }
    console.log("Error getting spot by category: no category provided");
    return null;
  },
  async getSpotAnalytics(user) {
    if (user) {
      try {
        let results = {};
        results.Locale = 0;
        results.Activity = 0;
        results.Scenery = 0;
        results.Site = 0;
        results.Structure = 0;
        results.Shopping = 0;
        results.Uncategorised = 0;
        results.User = 0;
        results.Global = 0;
        let r = null;
        const categories = ["Locale", "Activity", "Scenery", "Site", "Structure", "Shopping", "Uncategorised"];
        for (let i = 0; i < categories.length; i++) {
          let category = categories[i];
          r = await this.getSpotsByCategory(category);
          results[category] = r.length;
        }
        if (user._id)
          r = await this.getUserSpots(user._id);
        results.User = r.length;
        r = await this.getAllSpots();
        results.Global = r.length;
        return results;
      } catch (error) {
        console.log("Error getting spot analytics: bad params (user)");
        return null;
      }
    }
    console.log("Error getting spot analytics: no user provided");
    return null;
  },
  async searchSpots(userid, name, category, latitude, longitude) {
    try {
      let foundSpots = null;
      if (userid) {
        foundSpots = await this.getUserSpots(userid);
      } else {
        foundSpots = await this.getAllSpots();
      }
      if (foundSpots === null) {
        console.log("No spots found");
        return foundSpots;
      }
      if (name) {
        foundSpots = foundSpots.filter((spot) => spot.name === name);
      }
      if (latitude && longitude) {
        foundSpots = foundSpots.filter((spot) => spot.latitude === Number(latitude));
        foundSpots = foundSpots.filter((spot) => spot.longitude === Number(longitude));
      }
      if (category) {
        foundSpots = foundSpots.filter((spot) => spot.category === category);
      }
      if (foundSpots.length == 0)
        return null;
      return foundSpots;
    } catch (error) {
      console.log("Error executing spot search: bad params");
      return null;
    }
  },
  async deleteSpot(id) {
    if (id !== void 0) {
      try {
        await SpotMongoose.deleteOne({ _id: id });
        return null;
      } catch (error) {
        console.log("Error deleting spot: bad _id");
        return null;
      }
    }
    console.log("Error deleting spot: no _id provided");
    return null;
  },
  async deleteAllSpots() {
    await SpotMongoose.deleteMany({});
  },
  async editSpot(originalSpot, updatedSpot) {
    if (originalSpot && updatedSpot) {
      try {
        if (!updatedSpot.name) {
          updatedSpot.name = originalSpot.name;
        }
        ;
        if (!updatedSpot.description) {
          updatedSpot.description = originalSpot.description;
        }
        ;
        if (!updatedSpot.category) {
          updatedSpot.category = originalSpot.category;
        }
        ;
        if (!updatedSpot.latitude) {
          updatedSpot.latitude = originalSpot.latitude;
        }
        ;
        if (!updatedSpot.longitude) {
          updatedSpot.longitude = originalSpot.longitude;
        }
        updatedSpot.img = originalSpot.img, await this.deleteSpot(originalSpot._id);
        await this.addSpot(updatedSpot, originalSpot.userid);
        return updatedSpot;
      } catch (error) {
        console.log("Error editing spot: bad params");
        return null;
      }
    }
    console.log("Error editing spot: params missing");
    return null;
  },
  async deleteSpotsByUserid(userid) {
    if (userid) {
      try {
        const spots = await this.getUserSpots(userid);
        if (spots) {
          for (let i = 0; i < spots.length; i++) {
            await this.deleteSpot(spots[i]._id);
          }
        }
        return null;
      } catch (error) {
        console.log("Error deleting user spots: bad userid param");
        return null;
      }
    }
    console.log("Error deleting user spots: no userid provided");
    return null;
  },
  async updateSpot(updatedSpot) {
    const spot = await SpotMongoose.findOne({ _id: updatedSpot._id });
    if (spot) {
      spot.img = updatedSpot.img;
      await spot.save();
    }
  }
};
const spotService = {
  async signup(user) {
    try {
      const newUser = await userStore.addUser(user);
      return !newUser;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async login(email, password) {
    try {
      const user = await userStore.getUserByEmail(email);
      if (user !== null && user.password === password) {
        const session = {
          name: `${user.firstName} ${user.lastName}`,
          token: user._id.toString(),
          _id: user._id.toString()
        };
        return session;
      }
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  async createSpot(spot) {
    try {
      spotStore.addSpot(spot);
    } catch (error) {
      return false;
    }
  },
  async editSpot(oldSpot, newSpot) {
    try {
      spotStore.editSpot(oldSpot, newSpot);
    } catch (error) {
      return false;
    }
  },
  async deleteSpot(id) {
    try {
      await spotStore.deleteSpot(id);
      return null;
    } catch (error) {
      return false;
    }
  },
  async getSpots() {
    try {
      const spots = await spotStore.getAllSpots();
      return JSON.parse(JSON.stringify(spots));
    } catch (error) {
      return [];
    }
  },
  async getSpotById(id) {
    try {
      const spot = await spotStore.getSpotById(id);
      return JSON.parse(JSON.stringify(spot));
    } catch (error) {
      return null;
    }
  },
  async getUsers() {
    try {
      const users = await userStore.getAllUsers();
      return JSON.parse(JSON.stringify(users));
    } catch (error) {
      return [];
    }
  },
  async getAnalytics() {
    try {
      const analytics = await spotStore.getSpotAnalytics;
      return JSON.parse(JSON.stringify(analytics));
    } catch (error) {
      return [];
    }
  },
  async getUserSpotCount() {
    try {
      const users = await userStore.getAllUsers();
      let userIds = [];
      if (users)
        users.forEach((user) => {
          if (user._id)
            userIds.push(user._id);
        });
      let userSpotCount = [];
      for (const element of userIds) {
        let r = await spotStore.getUserSpots(element);
        if (r)
          userSpotCount.push(r.length);
      }
      return userSpotCount;
    } catch (error) {
      return [];
    }
  }
};
export {
  spotStore as a,
  spotService as s
};
