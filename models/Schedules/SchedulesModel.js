import { Sequelize } from "sequelize";
import db from "../../database/database.js";

const { DataTypes } = Sequelize;

const Schedules = db.define('schedules', {
    name: {
        type: DataTypes.STRING
    },
    time: {
        type: DataTypes.STRING
    },
    participants: {
        type: DataTypes.TEXT
    }
});


(async () => {
    await db.sync();
})();

export default Schedules;