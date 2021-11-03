
import mongoose from "mongoose";


const connectDB = () : void => {
    const mongoDb = 'mongodb+srv://zouhair:zouhair@cluster0.om7sc.mongodb.net/clubManagement?retryWrites=true&w=majority';
    mongoose.connect(mongoDb);
    const db = mongoose.connection;
            // tslint:disable-next-line:no-console
    db.on('error', console.error.bind(console, 'MongoDB Connection error'));
}

export default connectDB;