import query from "../db/index.js";

export async function postStudyRequest(newStudyRequest) {
    console.log({ newStudyRequest });

    //20Jan2022 - don't forget that any of the values that are strings ALSO need single quotes around them - see below
    const sqlString = `INSERT INTO study_request(
        user_id,
        session_type,
        why_study_request_needed,
        approx_availability,
        search_status
    )
    VALUES(
         ${newStudyRequest.userId},
        '${newStudyRequest.sessionType}',
        '${newStudyRequest.whyStudyRequestNeeded}',
        '${newStudyRequest.approxAvailability}',
        'open'
    );`;

    const result = await query(sqlString);
    console.log({ result });

    return result;
}

export async function getAllStudyRequests() {
    // VERSION 1: First, for basic test,  just do a simple select
    // const data = await query(`SELECT * FROM study_request;`);

    // VERSION 2: Now update to proper select with join:
    // VERSION 3:20Jan2022 - further updates to the column aliases to match the front end variables names
    //TODO: FRONT END - update front end variables to use these ""study request" versions
    const selectString = `SELECT b.id as "studyRequestId",
            to_char(b.date_posted, 'dd-mm-yyyy') as "datePosted",
            b.session_type as "sessionType",
            b.why_study_request_needed as "whyStudyRequestNeeded",
            b.approx_availability as "approxAvailability",
            b.search_status as "searchStatus",
            b.create_date_time as "studyRequestCreateDateTime",
            u.id as "userId",
            u.first_name as "firstName",
            u.last_name as "lastName",
            u.slack_name as "slackName",
            u.profile_pic_link as "profilePicLink",
            u.create_date_time as "userCreateDateTime"
        FROM study_request b
        INNER JOIN user u
        ON b.user_id = u.id
        ORDER BY b.id DESC;`;

    const data = await query(selectString);

    return data.rows;
}
