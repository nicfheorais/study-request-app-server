# ====================================================

# whats the most basic MVP?

const sqlString = `CREATE TABLE IF NOT EXISTS user_scores (id SERIAL PRIMARY KEY, user_id INT, user_gamer_name VARCHAR (25), user_score INT )`;

    - and use env variable sto connect to db
    - and set up a basic database in heroku

    ## rest-api
        - most basic
            -- if someone goes to select and return 'all scores' - no filtering/no where clause
                    -- localhost/3000/scores (using postman intiially to send get request)
                    -- returns the data as an array of objects? {user is, user gamer name, user score

# ====================================================

# project folder / files structure

/ (in the root folder)
DONE ./.gitignore
DONE ./.env
DONE ./.env.example - just to hold a blank .env template, without any values

./app.js - TODO: need to flesh this one out.

        TODO: QUESTION FOR COACH - should we be using app.js or bin/www.js
        TODO: QUESTION FOR COACH - app.get vs router.get?

DONE ./package.json - will exist. just need to edit

DONE (./package-lock.json will exist. no editing required we think)

DONE ./config.js - this will have the db object, and also some of the front end stuff (see day20-hackathon-backend)

./getDirName.js - see day20-hackathon-backend TODO: QUESTION FOR COACH - is this needed?

bin /
www.js TODO: for lots of stuff ???? TODO: QUESTION FOR COACH - is this needed?

DONE /db
DONE /db/scripts
DONE /db/scripts/ createUserScoresTable.js
DONE /db/scripts/ populateUserScoresTable.js
DONE /db/ index.js with the pool setup (and importing pg), and using the env variables via the db constants from config,js

/models/ - for the scripts that have the regular sql
/models/ scores.js - initially will just have a getAllScores() function.

            Later
             /models/  scores.js  will have more CRUD functions
            (later, will also have:
                /models/ users.js - full CFRUD
                /models/games.js - full CRUD

/routes/
/routes/ scores.js
-- will import express
-- will set up router
-- will import from models - to get the getAllScores() from scores.js
-- will code router.get for all scores (localhost:3000/scores)

TODO: which front-facing stuff goes into views vs public? (best practice question)
/views/
index.html - for the header, and the bottun (and the empty list - which the js will fill) - TODO: do we put this at /scores?

    TODO: how does the url link back to the index.html?
    eg to trigger the relevant router.get()s, we need to use localhost/3000/users and /users/1 and users/1/orders etc - do we need a html page that corrresponds to each one?

/public/
styles.css
normalise.css - which is the css reset file - optional.
main.js - which will have the button click event listener, and the code to add the scores to the dom.

# ====================================================

# breakdown problem into chunks - THE CHECKLIST!!!!!

-   DONE intialise a heroku database and grab the credentials
    (for anyone cloning: you will neeed to do this, and then paste the credentials into .env - see later)

-   DONE - initalise folder as git one - already done by cloning down repo

-   DONE initialise folder as npm one + create package.json
    $ npm init - DONE
    (for anyone cloning: you will (probably?) need to re-do this)

-   DONE install dependencies - express , pg for prod - nodemond, , dotenv just for Dev (\_D or --save-dev) - TODO: others are optionsal? cookie-parser debug morgan

             $ npm i express - DONE
             $ npm i pg - DONE
             $ npm i -D nodemon - DONE
             $ npm i -D dotenv - DONE
             $ npm i cookie-parser - DONE
             $ npm i debug - DONE
             npm i morgan - DONE

             (for anyone cloning: just run $npm i, since the dependecies will be in the package.json)

    **_ NB - DO package.json edits AFTER ALL THE INSTALLS OTHERWISE THE EXPRESS install will fail _**

-   DONE edit package.json (the dependencies should have now been added)
    -- DONE add type/module line
    "type" : "module",

    -- DONE set up the script shortcuts
    -- UDATE: - we forgot we needed to include "-r dotenv/config " for anything using db connection
    "start": "node -r dotenv/config ./bin/www.js",
    [sc: temp changing this to "start": "node -r dotenv/config app.js", ]

                 "dbcreateuserscorestable": "node -r dotenv/config ./db/scripts/createUserScoresTable.js",
                 "dbpopulateuserscorestable": "node -r dotenv/config ./db/scripts/populateUserScoresTable.js",
                 "dev" : "nodemon -r dotenv/config  ./bin/www.js",
                 "test": "echo \"Error: no test specified\" && exit 1"

-   DONE create a gitignore file - include. node_modules and .env file

-   DONE create a .env file (and an env template file) covering the following ENV VARIABLES:
    DB_USER=
    DB_HOST=
    DB_DATABASE=
    DB_PASSWORD=
    DB_PORT=
    TESTING=hello
    (for anyone cloning: you will have to create a .env file from scratch again, and fill with da credentials)

-   DONE - add the real database credentials values to the .env file.

-   DONE create a config.js file - with an database connection object in it - pointing to the env variables (not the real values)
    export const dbUser = process.env.DB_USER;
    export const dbHost = process.env.DB_HOST;
    export const dbDatabase = process.env.DB_DATABASE;
    export const dbPassword = process.env.DB_PASSWORD;
    export const dbPort = process.env.DB_PORT;
    export const dbTestHelloStr = process.env.DB_TESTING;

-   DONE Also in config.js TODO: QUESTION FOR COACH - do we actually need the following (from day20)?
    // Don't change anything in this file! This helps serve the front end.
    import path, { dirname } from "path";
    import { fileURLToPath } from "url";
    export const **dirname = dirname(fileURLToPath(import.meta.url));
    export const html = path.join(**dirname, `views`, `index.html`);

-   DONE in the db/index.js file,
    -- DONE import pg:
    import pg from "pg";

    -- DONE import the database connection object from config.js
    <<TODO: add in the line you use if you've st it up as an object>>
    OR
    as individual variables from ROOT FOLDER config.js (and use it)
    import \* as config from '../config.js';

    -- DONE set up the pool connection stuff
    const pool = new pg.Pool({
    user: config.dbUser,
    host: config.dbHost,
    database: config.dbDatabase,
    password: config.dbPassword,
    port: config.dbPort,
    ssl: { rejectUnauthorized: false },
    });

                      export default function query(text, params) {
                      return pool.query(text, params);}

-   DONE setup sql for the database
    --- DONE write the sql to create the user score table in db/scripts/createUserScoresTable.js
    --- DONE write the sql to fill the user score table in db/scripts/populateUserScoresTable.js
    --- DONE run the scripts to FIRST create and THEN fill the table:
    $ npm run dbcreateuserscorestable
    $ npm run dbpopulateuserscorestable

-- DONE write the (model) function that gets all the scores from the database
/models/scores.js - initially will just have a getAllScores() function.

-   write the (router) function that listens to localhost:PORT/scores
    and calls the getAllScores function.
    /routes/ scores.js - listening at localhost:3000/scores/

TODO: QUESTION FOR COACH about routing and app.get(0 vs router.get
const app = express();
...
app.get(stuff) ...

        but now we're still using app.stuff, but we're mostly using
        const router = express.Router();
            ...
        router.get(stuff) ...
