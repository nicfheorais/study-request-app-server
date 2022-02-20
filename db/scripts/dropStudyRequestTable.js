import query from "../index.js";

const sqlString = `DROP TABLE IF EXISTS study_request`;

async function dropStudyRequestTable() {
    const res = await query(sqlString);
    console.log("In db/scripts/dropStudyRequestTable.js: Dropped table", res);
}

dropStudyRequestTable();
