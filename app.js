//set up express, and the routes
import express from "express";
import buddySearchesRoutes from "./routes/buddysearches.js"; //DEBUG

const app = express();

//if you send in a json body, you need to have app.use(express.json()); BEFORE any app.get() or app.post() calls
app.use(express.json());
console.log(`Reporting from app.js loud and clear`);

// 20-Jan-2022
//   Have installed cors package, and adding this to see if i can fix the cors errors.
//   This arrticle was very useful (if it works!)
//   https://www.section.io/engineering-education/how-to-use-cors-in-nodejs-with-express/
import cors from "cors";
app.use(
    cors({
        origin: "*",
    })
);

//START DEBUG
// 1 - UPDATE : THIS ONE TRIGGERS
// app.get("/", (req, res) => {
//     res.send("Yay! We've triggered an app.get, albeit inside app.js");
// });
//
// 2 - UPDATE - This also works
// app.use("/buddysearches", (req, res) => {
//     res.send(
//         "Yay! We've triggered an app.use for buddysearches, albeit inside app.js"
//     );
// });
//END DEBUG
app.use("/buddysearches", buddySearchesRoutes);

export default app;
// FYI the database PORT is now covered in bin/www.js
//FYI the routes are now in the ./routes folder
