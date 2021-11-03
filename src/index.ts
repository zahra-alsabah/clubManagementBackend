import express from "express";
import connectDB from "./config/database";
import userRouter from "./routes/user.router"
import memberRouter from "./routes/member.router"
import cors from "cors"

connectDB();
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.use(userRouter);
app.use(memberRouter);

app.listen( port, () => {
        // tslint:disable-next-line:no-console
     console.log( `server started at http://localhost:${ port }` );
} );