import BaseModel from "./BaseModel"
import RoleModel from "./RoleModel"
import PageModel from "./PageModel"

class UserModel extends BaseModel {
  static tableName = "users"

  static get relationMappings() {
    return {
      role: {
        modelClass: RoleModel,
        relation: BaseModel.BelongsToOneRelation,
        join: {
          from: "users.roleId",
          to: "roles.id",
        },
      },
      relationPageUser: {
        modelClass: PageModel,
        relation: BaseModel.ManyToManyRelation,
        join: {
          from: "users.id",
          through: {
            from: "relationPageUser.idUser",
            to: "relationPageUser.idPage",
          },
          to: "pages.id",
        },
      },
    }
  }
}

export default UserModel
