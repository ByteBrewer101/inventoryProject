import mongoose, { mongo } from "mongoose";

export async function databaseConnect() {
  await mongoose.connect("mongodb://localhost:27017/inventorysystem");
  console.log("mongodb connected");
}

const superAdmin = new mongoose.Schema({
  username: String,
  DarkStore: String,
  password: String,
});

const storeAdmin = new mongoose.Schema({
  username: String,
  DarkStoreId: String,
  password: String,
});

const inventorySchema = new mongoose.Schema({

    Itemid :String,
    storeAdminId:String,
    stock : Number,


})

export const adminModel = mongoose.model("adminModel", superAdmin);
export const storeAdminModel = mongoose.model("storeAdminModel", storeAdmin);
export const inventoryModel = mongoose.model("inventoryModel",inventorySchema)
