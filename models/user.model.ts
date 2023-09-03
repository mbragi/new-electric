import { Schema, model, models } from "mongoose";
// 1. Create an interface representing a document in MongoDB.
interface User {
 userName: string;
 email: string;
 password: string;
}
const UserSchema = new Schema<User>({
 userName: {
  type: String,
  required: [true, 'User Name is required']
 },
 email: { 
  type: String,
  required: [true, 'Email is required'],
  unique: true,
 },
 password: {
  type: String,
  required: [true, 'Password is required']
 }
},
 { timestamps: true })
const User = models.User || model<User>('User', UserSchema)
export default User