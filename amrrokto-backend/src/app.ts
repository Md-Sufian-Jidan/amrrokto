import express, { Application, Request, Response } from "express";
import { sendResponse } from "./app/utils/sendResponse";
import status from "http-status";
import cors from "cors";
import { env } from "./app/config/env";
import router from "./app/routes";

const app: Application = express();

app.use(express.json({ limit: "16kb", }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cors({
  origin: [env.FRONTEND_URL, "http://localhost:3000", "http://localhost:7000"],
  // methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  // allowedHeaders: ["Content-Type", "Authorization", "cookie"],
  credentials: true
}));

app.use("/api/v1", router);

app.get('/', (req: Request, res: Response) => {
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "AMRROKTO service is running successfully",
    data: {
      author: {
        name: "Md Abu Sufian Jidan",
        version: "1.0.0",
        github: "https://github.com/Md-Sufian-Jidan",
        linkedin: "https://www.linkedin.com/in/md-sufian-jidan/",
        portfolio: "https://mdabusufianjidan-portfolio.vercel.app",
      },
      host: req.hostname,
      time: new Date().toISOString(),
    }
  });
});

export default app;