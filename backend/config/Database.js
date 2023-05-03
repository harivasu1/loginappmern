import { Sequelize } from "sequelize";
 
const db = new Sequelize('authdb', 'root', '!Admin1234', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;