//set up express, and the routes
import express from "express";
import studyRequestRoutes from "./routes/studyrequests.js"; //FYI we could call this (studyRequestRoutes) anything suitable - it's an alias for router defined inside s studyrequests.js

const app = express();

//if you send in a json body, you need to have app.use(express.json()); (app.use runs for any route) BEFORE any app.get() or app.post() calls - so that it has already been run.
app.use(express.json());
console.log(`Reporting from app.js loud and clear`);

// 20-Jan-2022
//   Have installed cors package, and adding this to see if i can fix the cors errors.
//   This article was very useful (if it works!)
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
// app.use("/studyrequests", (req, res) => {
//     res.send(
//         "Yay! We've triggered an app.use for buddysearches, albeit inside app.js"
//     );
// });
//END DEBUG
app.use("/studyrequests", studyRequestRoutes);

export default app;
// FYI the database PORT is now covered in bin/www.js
//FYI the routes are now in the ./routes folder
