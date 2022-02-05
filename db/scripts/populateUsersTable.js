//  HOW TO USE THIS SCRIPT
//  this has been added to package.json as follows:
//   "dbpopulateuserstable": "node -r dotenv/config ./db/scripts/populateUsersTable.js",
//
//  therefore it can be run at the command prompt as follows:
//       $ npm run dbpopulateuserstable

import query from "../index.js";

//20Jan2022 - Need to NOT send in a value for id column, because it messes up the auto-increment for subsequent inserts.
const sqlString = `INSERT INTO users(
        first_name, 
        last_name, 
        slack_name,
        profile_pic_link)

    VALUES
        ('Mary','Duffy','MDuffy', '1.png'),
        ('Jane','Rushmore','JRushmore', '2.png'),
        ('Belinda','Jones','BelJones', '3.png'),
        ('Bill','Stansell','BillStansell', '4.png');`;

async function populateUsersTable() {
    const res = await query(sqlString);

    console.log(
        "In db/scripts/populateUsersTable.js: populated users table",
        res
    );
}

populateUsersTable();
