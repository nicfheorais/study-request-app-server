import query from "../index.js";

const sqlString = `DROP TABLE IF EXISTS user`;

async function dropUserTable() {
    const res = await query(sqlString);
    console.log("In db/scripts/dropUserTable.js: Dropped table", res);
}

dropUserTable();
