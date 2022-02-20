import query from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS test_table 
                         (id SERIAL PRIMARY KEY, 
                          test_user_id INT, 
                          test_gamer_name VARCHAR (25),
                          test_score INT
                          )`;

async function createTestTable() {
    const res = await query(sqlString);
    console.log("In db/scripts/createTestTable.js: Created table", res);
}

createTestTable();
