# How to make a CSV copy of the users table

1. Copy the connection string of the database from `server/server.js` file or from supertokens website.
2. Open postgres shell by using the command `psql CONNECTION_STRING`
3. Use the following copy to make a CSV

`\copy users TO '/home/app/FILENAME.csv' DELIMITER ',' CSV HEADER;`

4. You can find the file `FILENAME.csv` in home directory

