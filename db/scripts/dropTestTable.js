import query from "../index.js";

const sqlString = `DROP TABLE IF EXISTS test_table`;

async function dropTestTable() {
    const res = await query(sqlString);
    console.log("In db/scripts/dropTestTable.js: Dropped table", res);
}

dropTestTable();
