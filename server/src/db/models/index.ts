import sequelize from "../../config/db.config.js";
import { User } from "./user.model.js";
import { RefreshToken } from "./refreshToken.model.js";
import { Role } from "./role.model.js";
import { UserRole } from "./userRole.model.js";
import { Document } from "./document.model.js";
import { DocumentUser } from "./documentUser.model.js";
import Sequelize from "sequelize";

sequelize.addModels([
  User,
  RefreshToken,
  Role,
  UserRole,
  Document,
  DocumentUser,
]);

const db={
    Sequelize,
    sequelize,
    User,
    RefreshToken,
    Role,
    UserRole,
    Document,
    DocumentUser
}

export default db