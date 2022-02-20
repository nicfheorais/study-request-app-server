//set up the database PORT and the listener:
import app from "../app.js";

// if there's a port for a remote deployment on, say, Heroku, use that, otherwise go for local host, which i would set to 3000, or 30001 or 5000 etc.
const LOCAL_PORT = 5000; //TODO: consider moving these constants into a common file or .env
const PORT = process.env.PORT || LOCAL_PORT;

//remember app = express(), andexpress is imported from 'express';
app.listen(PORT, () => {
    console.log(`We are coming live from www.js. listening on PORT ${PORT}`);
});
