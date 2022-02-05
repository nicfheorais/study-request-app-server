//  HOW TO USE THIS SCRIPT
//  this has been added to package.json as follows:
//                "dbdropuserstable": "node -r dotenv/config ./db/scripts/dropUsersTable.js",
//
//  therefore it can be run at the command prompt as follows:
//       $ npm run dbdropuserstable

import query from "../index.js";

const sqlString = `DROP TABLE IF EXISTS users`;

async function dropUsersTable() {
    const res = await query(sqlString);
    console.log("In db/scripts/dropUsersTable.js: Dropped users table", res);
}

dropUsersTable();
