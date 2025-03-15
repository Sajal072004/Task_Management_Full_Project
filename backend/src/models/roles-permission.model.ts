import mongoose, {Schema, Document} from "mongoose";
import { Permissions, PermissionType, Roles, RoleType } from "../enums/role.enum";
import { RolePermissions } from "../utils/role-permission";

export interface RolesDocument extends Document {

  name: RoleType;
  permissions: Array<PermissionType>;
}

const roleSchema = new Schema<RolesDocument>({
  name: {
    type:String,
    enum: Object.values(Roles),
    required:true,
    unique:true
  },
  permissions:{
    type:[String],
    enum:Object.values(Permissions),
    required:true,
    default: function(this : RolesDocument){
      return RolePermissions[this.name];
    }
  },
 
},
{
  timestamps:true
}
);

const RoleModel = mongoose.model<RolesDocument>("Role", roleSchema);
export default RoleModel;