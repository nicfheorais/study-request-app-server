//  HOW TO USE THIS SCRIPT
//  this has been added to package.json as follows:
//       "dbcreatetesttable": "node -r dotenv/config ./db/scripts/createTestTable.js",
//
//  therefore it can be run at the command prompt as follows:
//       $ npm run dbcreatetesttable

import query from "../index.js";
//this is a script to test creating a test table

const sqlString = `CREATE TABLE IF NOT EXISTS test_table 
                         (id SERIAL PRIMARY KEY, 
                          test_user_id INT, 
                          test_gamer_name VARCHAR (25),
                          test_score INT
                          )`;

async function createTestTable() {
    const res = await query(sqlString);
    console.log("In db/scripts/createTestTable.js: Created TEST table", res);
}

createTestTable();
