import { BelongsTo, Column, DataType, ForeignKey, PrimaryKey, Table, Model } from "sequelize-typescript";
import PermissionEnum from "../../types/enums/permission.enum.js";
import { User } from "./user.model.js";
import { Document } from "./document.model.js";

@Table({tableName: "document_user", underscored: true})
class DocumentUser extends Model{
    @Column(DataType.ENUM("VIEW", "EDIT"))
    permission!: PermissionEnum

    @BelongsTo(()=>User)
    user!: User

    @ForeignKey(()=>User)
    @PrimaryKey
    @Column
    userId!: number

    @BelongsTo(()=>Document)
    document!: Document

    @ForeignKey(()=>Document)
    @PrimaryKey
    @Column
    documentId!: number
}

export {DocumentUser}