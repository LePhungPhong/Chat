import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import path from "path";
import { corsOptions, limiter, URL_API_V1 } from "./global/settingApp";
import GlobalError from "./middlewares/GlobalError";
import AppError from "./utils/error/AppError";
import { HTTP_STATUS } from "./response/httpStatusCode";
import videoRouter from "./routes/videoCall.route";
import chatRouter from "./routes/chat.route";
import turnRouter from "./routes/turn.route";
const app: Application = express();

// ==============================
// Middleware cấu hình hệ thống
// ==============================
app.use(helmet());
app.use(cors(corsOptions));
app.use(limiter);
app.use(cookieParser());
app.use(express.json({ limit: "10mb" }));

app.use((req, res, next) => {
  (req as any).requestTime = new Date().toISOString();
  next();
});

// ==============================
// Cấu hình Content Security Policy (CSP)
// ==============================
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: [
        "'self'",
        "'unsafe-inline'",
        "https://cdn.socket.io",
        "https://cdn.skypack.dev",
        "https://esm.run",
        "https://cdn.jsdelivr.net",
        "https://esm.sh"
      ],
      styleSrc: ["'self'", "'unsafe-inline'"],
      connectSrc: [
        "'self'",
        "ws://localhost:3001",
        "wss://localhost:3001",
        "https://cdn.socket.io",
        "https://cdn.skypack.dev",
        "https://esm.run",
        "https://cdn.jsdelivr.net",
        "https://esm.sh"
      ],
      imgSrc: ["'self'", "data:"],
    },
  })
);


// ==============================
// Phục vụ file tĩnh (Public + Node Modules)
// ==============================
// app.use(
//   "/node_modules",
//   express.static(path.resolve(__dirname, "../node_modules"))
// );
app.use(express.static(path.join(__dirname, "../public")));

app.get("/favicon.ico", (req, res) => {
  res.status(204).end();
});

// ==============================
// Khai báo route API
// ==============================
app.use(`${URL_API_V1}/video`, videoRouter);
app.use(`${URL_API_V1}/chat`, chatRouter);
app.use(`${URL_API_V1}/turn`, turnRouter);
// ==============================
// Xử lý route không tồn tại (404)
// ==============================

app.all(/.*/, (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Không tìm thấy đường dẫn ${req.originalUrl} trên server`, HTTP_STATUS.NOT_FOUND));
});

// ==============================
// Middleware xử lý lỗi toàn cục
// ==============================
app.use(GlobalError);

export default app;
