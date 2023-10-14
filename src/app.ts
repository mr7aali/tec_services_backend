import express, { Application, urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./app/routes";



const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());





//route
app.use("/api/v1", router);

export default app;