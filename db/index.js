//Set up the PostgreSQL connection object - see Wed 15 Dec (day 23, W5.D3) for detailed explanation
//Note the DATABASE_URL has been taken from Heroku, and pasted into the .env file, and the dotenv package copies them from there into the process.env variable.
import pg from "pg"; ///FYI the pg imported is an object
const pool = new pg.Pool({
    //set up connection string object
    connectionString: process.env.DATABASE_URL,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
    ssl: {
        rejectUnauthorized: false,
    },
});

//This will be used for all queries to the database.
// the sql command string will pass as an argument into the 'text' parameter
// the params object is needed to create paramaterised sql statements
// (and there's sometimes an optional callback function as 3rd param, but because we are using async/await instead of callback functions so we remove that 3rd param, and since the pool.query() method is overloaded, it will instead return a promise.)
export default function query(text, params) {
    return pool.query(text, params);
}
