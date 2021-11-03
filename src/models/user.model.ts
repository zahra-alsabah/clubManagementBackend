import * as mongoose from 'mongoose';
import User from '../interfaces/user.interface';

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});



const UserModel = mongoose.model<User & mongoose.Document>('User', UserSchema);

export default UserModel;