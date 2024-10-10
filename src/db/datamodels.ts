import mongoose, { mongo, Mongoose } from "mongoose";

export async function databaseConnect() {
  await mongoose.connect("mongodb://localhost:27017/inventorysystem");
  console.log("mongodb connected");
}


const userSchema = new mongoose.Schema({
  id: String,
  Email: String,
  UserType: String,
  storeAdminId: String,
});


const transactionsSchema = new mongoose.Schema({
  transactionID: String,
  date: Date,
  type: String,
  actionByUserId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  inventoryMovedStock: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Inventory",
  },
  inventoryId: { type: mongoose.Schema.Types.ObjectId, ref: "InventoryModel" },
});


const inventorySchema = new mongoose.Schema({
  Itemid: String,
  storeId: { type: mongoose.Schema.Types.ObjectId, ref: "Store" },
  stock: Number,
});


const storeSchema = new mongoose.Schema({
  storeId: String,
  storeAdminId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

// Create models
export const User = mongoose.model("User", userSchema);
export const Transaction = mongoose.model("Transaction", transactionsSchema);
export const InventoryModel = mongoose.model("InventoryModel", inventorySchema);
export const Store = mongoose.model("Store", storeSchema);
