import { Column, DataType, HasMany, Table, Model, BelongsToMany, Scopes } from "sequelize-typescript";
import { RefreshToken } from "./refreshToken.model.js";
import { Role } from "./role.model.js";
import { UserRole } from "./userRole.model.js";
import { DocumentUser } from "./documentUser.model.js";

@Scopes(()=>({
    withRoles:{
        include:[
            {
                model: UserRole,
                attributes: ['createdAt', 'updatedAt'],
                include: [Role]
            }
        ]
    }
}))

@Table({tableName: "user", underscored: true})
class User extends Model{
    @Column(DataType.STRING)
    email!: string

    @Column(DataType.STRING)
    password!: string

    @Column(DataType.BOOLEAN)
    isVerified!: boolean

    @Column(DataType.STRING)
    verificationToken!: string

    @Column(DataType.STRING)
    passwordResetToken!: string

    @HasMany(()=> RefreshToken,{
        onDelete: 'CASCADE'
    })
    refreshTokens!: Array<RefreshToken>

    @BelongsToMany(()=>Role,{
        through: {
            model: ()=>UserRole
        }
    })
    roles!: Array<Role>

    @HasMany(()=>UserRole,{
        onDelete: "CASCADE"
    })
    userRoles!: Array<UserRole>

    @HasMany(()=>DocumentUser,{
        onDelete: "CASCADE"
    })
    sharedDocument!: Array<DocumentUser>
}

export {User}