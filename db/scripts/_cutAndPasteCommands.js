//IF EXISITS, need to drop BUDDY table before Users (because of FK constraint)
npm run dbdropbuddysearchestable
npm run dbdropuserstable

// NB CREATE USERS TABLE FIRST - Foreign Key constraints
npm run dbcreateuserstable
//NB Fill Users table BEFORE Buddy SEarch - Foreign Key onstraint
npm run dbpopulateuserstable

//So Create and populate Budddy Search AFTER users 
npm run dbcreatebuddysearchestable
npm run dbpopulatebuddysearchestable

//Add to package.json:
"db-drop-create-fill-all-tables": "npm run dbdropbuddysearchestable && npm run dbdropuserstable && npm run dbcreateuserstable && npm run dbpopulateuserstable && npm run dbcreatebuddysearchestable && npm run dbpopulatebuddysearchestable",