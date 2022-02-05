import query from "../db/index.js";

// 20Jan2022 -  DONE - Add in an INSERT statement for the POST route to use - in a function called postBuddySearch(?)
export async function postBuddySearch(newBuddySearch) {
    console.log({ newBuddySearch });

    //20Jan2022 - don't forget that any of the values that are strings ALSO need single quotes around them - see below
    const sqlString = `INSERT INTO buddy_searches(
        user_id,
        session_type,
        why_study_buddy,
        approx_availability,
        search_status
    )
    VALUES(
         ${newBuddySearch.userId},
        '${newBuddySearch.sessionType}',
        '${newBuddySearch.whyStudyBuddy}',
        '${newBuddySearch.approxAvailability}',
        'open'
    );`;

    const result = await query(sqlString);
    console.log({ result });

    return result;
}

export async function getAllBuddySearches() {
    // First, for basic test,  just do a simple select
    // const data = await query(`SELECT * FROM buddy_searches;`);

    // Now update to proper select with join:
    // 20Jan2022 - further updates to the column aliases to match the front end variables names
    const selectString = `SELECT b.id as "buddySearchId",
            to_char(b.date_posted, 'dd-mm-yyyy') as "datePosted",
            b.session_type as "sessionType",
            b.why_study_buddy as "whyStudyBuddy",
            b.approx_availability as "approxAvailability",
            b.search_status as "searchStatus",
            b.create_date_time as "buddySearchCreateDateTime",
            u.id as "userId",
            u.first_name as "firstName",
            u.last_name as "lastName",
            u.slack_name as "slackName",
            u.profile_pic_link as "profilePicLink",
            u.create_date_time as "userCreateDateTime"
        FROM buddy_searches b
        INNER JOIN users u
        ON b.user_id = u.id
        ORDER BY b.id DESC;`;

    const data = await query(selectString);

    return data.rows;
}
