//  HOW TO USE THIS SCRIPT
//  this has been added to package.json as follows:
//    "dbcreateuserstable": "node -r dotenv/config ./db/scripts/createUsersTable.js",
//
//  therefore it can be run at the command prompt as follows:
//       $ npm run dbcreateuserstable

import query from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS users 
                         (id serial PRIMARY KEY,
                          first_name VARCHAR (30),
                          last_name VARCHAR (30),
                          slack_name VARCHAR (30),
                          profile_pic_link VARCHAR (200),
                          create_date_time  TIMESTAMP NOT NULL DEFAULT CURRENT_DATE
                          )`;

async function createUsersTable() {
    const res = await query(sqlString);

    console.log("In db/scripts/createUsersTable.js: Created users table", res);
}

createUsersTable();
