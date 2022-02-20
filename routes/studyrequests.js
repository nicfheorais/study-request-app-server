import express from "express";

import {
    getAllStudyRequests,
    postStudyRequest,
} from "../models/studyrequests.js";
//TODO: remember to add the postStudyRequest(?) into the export.

const router = express.Router();
// Remember- the main difference (between express() and express.router()) is that express() is a top level function, which means it performs core functionality for the library and it contains its own methods where, as a matter of fact, Router is one, and that is why when we create a specific router we chain the Router() method on express , kind of like how we use app.

//START DEBUG
console.log(`We have reached routes/studyrequests.js script`);
// Note: router.use will be middleware that is specific to this router
// router.use(() => {
//     console.log(
//         `inside our Router.use() function which triggers for all paths`
//     );
// });
//END DEBUG

router.get("/", async (req, res) => {
    console.log(`We have reached the router.get base function`);

    const searchResults = await getAllStudyRequests();

    res.json({
        success: true,
        message: `Retrieved all open study requests`,
        payload: searchResults,
    }); //TODO: Add in 'status' to select sql etc. and update this to Open-only select query

    //temp - print out res to test
    // console.log("Results from getAllStudyRequests are: ", res);
    return;
});

router.post("*", async function (req, res) {
    const postResults = await postStudyRequest(req.body);

    res.json({
        success: true,
        message: `Inserted new study request record`,
        payload: postResults,
    });
});

export default router;
