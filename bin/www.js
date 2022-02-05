//set up the database PORT and the listener:
import app from "../app.js";

const PORT = process.env.PORT || 5000;
// i.e. if there's a port for heroku, use that, otherwise go for local host

app.listen(PORT, () => {
    console.log(`We are coming live from www.js. listening on PORT ${PORT}`);
});
