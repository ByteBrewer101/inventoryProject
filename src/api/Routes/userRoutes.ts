import express from "express";
import { storeAdminModel } from "../../db/datamodels";

export const userRouter = express.Router();

userRouter.get("/user", (req, res) => {
  res.json({
    msg: "hello",
  });
});


userRouter.post("/createadmin", async (req, res): Promise<any> => {
  try {
    const { username, DarkStoreId, password } = req.body;

    if (!username || !DarkStoreId || !password) {
      return res.status(400).json({
        error: "All fields (username, DarkStoreId, password) are required",
      });
    }

   
    const currentStoreAdmin = await storeAdminModel.findOne({ DarkStoreId });

    if (currentStoreAdmin) {
      return res.status(400).json({
        error: "Admin already exists for this DarkStoreId",
      });
    }

   
    const newStoreAdmin = new storeAdminModel({
      username,
      DarkStoreId,
      password, 
    });

    await newStoreAdmin.save();

    res.status(201).json({
      message: "Store admin created successfully",
      admin: newStoreAdmin,
    });
  } catch (error) {
    return res.status(500).json({
    "error":error
    });
  }
});
