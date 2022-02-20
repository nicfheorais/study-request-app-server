import query from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS user 
                         (id serial PRIMARY KEY,
                          first_name VARCHAR (30),
                          last_name VARCHAR (30),
                          slack_name VARCHAR (30),
                          profile_pic_link VARCHAR (200),
                          create_date_time  TIMESTAMP NOT NULL DEFAULT CURRENT_DATE
                          )`;

async function createUserTable() {
    const res = await query(sqlString);

    console.log("In db/scripts/createUserTable.js: Created table", res);
}

createUserTable();
