import express from "express";
import { inventoryModel } from "../../db/datamodels";

export const inventoryRouter = express.Router();

inventoryRouter.get("/getinventory", async (req, res): Promise<any> => {
  try {
    const { storeAdminId } = req.body;

    const inventory = await inventoryModel.find({ storeAdminId });

    if (!inventory) {
      return res.status(404).json({
        error: "Inventory not found for the given store admin ID",
      });
    }

    res.status(200).json({
      inventory,
    });
  } catch (error) {
    return res.status(500).json({
      error: error,
    });
  }
});

inventoryRouter.post("/addinventory", async (req, res): Promise<any> => {
  try {
    const { Itemid, storeAdminId, stock } = req.body;

    const newInventory = new inventoryModel({
      Itemid,
      storeAdminId,
      stock,
    });

    await newInventory.save();

    res.status(201).json({
      message: "Inventory item added successfully",
    });
  } catch (error) {
    return res.status(500).json({
      error: error,
    });
  }
});