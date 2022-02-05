//  HOW TO USE THIS SCRIPT
//  this has been added to package.json as follows:
//        "dbdropbuddysearchestable": "node -r dotenv/config ./db/scripts/dropBuddySearchesTable.js",
//
//  therefore it can be run at the command prompt as follows:
//       $ npm run dbdropbuddysearchestable

import query from "../index.js";

const sqlString = `DROP TABLE IF EXISTS buddy_searches`;

async function dropBuddySearchesTable() {
    const res = await query(sqlString);
    console.log(
        "In db/scripts/dropBuddySearchesTable.js: Dropped buddy_searches table",
        res
    );
}

dropBuddySearchesTable();
