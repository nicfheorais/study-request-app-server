//  HOW TO USE THIS SCRIPT
//  this has been added to package.json as follows:
//       "dbdroptesttable": "node -r dotenv/config ./db/scripts/dropTestTable.js"
//
//  therefore it can be run at the command prompt as follows:
//       $ npm run dbdroptesttable

import query from "../index.js";
//this is a script to test dropping a test table

const sqlString = `DROP TABLE IF  EXISTS test_table`;

async function dropTestTable() {
    const res = await query(sqlString);
    console.log("In db/scripts/dropTestTable.js: Dropped TEST table", res);
}

dropTestTable();
