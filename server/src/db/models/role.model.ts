import { Column, DataType, Table, Model, BelongsToMany, HasMany } from "sequelize-typescript";
import RoleEnum from "../../types/enums/role.enum.js";
import { User } from "./user.model.js";
import { UserRole } from "./userRole.model.js";

@Table({tableName: "role", underscored: true, timestamps: true})
class Role extends Model{
    @Column(DataType.ENUM("ADMIN", "SUPERADMIN"))
    name!: RoleEnum

    @BelongsToMany(()=>User,{
        through: ()=>UserRole
    })
    users!: Array<User>

    @HasMany(()=>UserRole,{
        onDelete: "CASCADE"
    })
    roleUser!: Array<UserRole>
}

export {Role}