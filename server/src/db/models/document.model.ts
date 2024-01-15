import { BelongsTo, Column, DataType, Default, ForeignKey, Table, Model, DefaultScope, HasMany } from "sequelize-typescript";
import { User } from "./user.model.js";
import { DocumentUser } from "./documentUser.model.js";

@DefaultScope(()=>({
    include:[
        {
            model: DocumentUser,
            include:[
                {
                    model: User,
                    attributes: ["email"]
                }
            ]
        }
    ]
}))

@Table({tableName: "document", underscored: true})
class Document extends Model{
    @Column(DataType.STRING)
    title!: string

    @Column(DataType.JSONB)
    content!: string

    @ForeignKey(()=>User)
    userId!: number

    @BelongsTo(()=>User)
    user!: User

    @HasMany(()=>DocumentUser,{
        onDelete: "CASCADE"
    })
    users!: Array<DocumentUser>

    @Default(false)
    @Column(DataType.BOOLEAN)
    isPublic!: boolean
}

export {Document}