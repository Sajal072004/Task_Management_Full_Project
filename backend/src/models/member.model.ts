import mongoose, {Document, Schema} from "mongoose";
import { RolesDocument } from "./roles-permission.model";

export interface MemberDocument extends Document {
  userId: mongoose.Types.ObjectId;
  workspaceId: mongoose.Types.ObjectId;
  role:RolesDocument;
  joinedAt: Date;
}

const memeberSchema = new Schema<MemberDocument>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  workspaceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Workspace",
    required: true,
  },
  role:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Role",
    required:true
  },

  joinedAt: {
    type:Date,
    default:Date.now
  }
},
  {
    timestamps: true,
  }
);

const MemberModel = mongoose.model<MemberDocument>("Member", memeberSchema);

export default MemberModel;
