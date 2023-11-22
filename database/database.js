import { Sequelize } from "sequelize"

const db = new Sequelize('gerresheimer_scheduler', 'root', 'gspbrind1mitras23', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;