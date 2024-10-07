"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Router_1 = require("./api/Router");
const datamodels_1 = require("./db/datamodels");
const PORT = 5000;
(0, datamodels_1.databaseConnect)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/v1", Router_1.apiRouter);
app.listen(PORT, () => {
    console.log("running on " + PORT);
});
