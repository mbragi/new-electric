import { Schema, model, models } from "mongoose";
// 1. Create an interface representing a document in MongoDB.
interface Bills {
 accountOwner: Schema.Types.ObjectId;
 company: string;
 amount: number;
 meterNumber: string;
 phoneNumber: string;
 prepaid:string
 postPaid: string
}
const BillsSchema = new Schema<Bills>({

 accountOwner: {
  type: Schema.Types.ObjectId,
  ref: 'User',
  required: [true, 'Account Owner is required']
 },
 prepaid: {
  type: String,
  required: [true, 'prepaid is required']
 },
 postPaid: {
  type: String,
  required: [true, 'prepaid is required']
 },
 amount: {
  type: Number,
  required: [true, 'Amount is required']
 },

 meterNumber: {
  type: String,
  required: [true, 'Meter Number is required']
 },
 phoneNumber: {
  type: String,
  required: [true, 'Phone Number is required']
 },
},
 { timestamps: true })
const Bills = models.Bills || model<Bills>('Bills', BillsSchema)
export default Bills