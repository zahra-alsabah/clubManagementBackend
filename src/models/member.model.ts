import * as mongoose from 'mongoose';
import Member from '../interfaces/member.interface';

const MemberSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    brithdate: Date,
    entranceDate: Date,

});
const MemberModel = mongoose.model<Member & mongoose.Document>('Member', MemberSchema);

export default MemberModel;