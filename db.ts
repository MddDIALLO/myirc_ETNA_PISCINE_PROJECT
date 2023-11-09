import mysql from 'mysql2';

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'zertyu',
    password: 'sdfyu',
    database: 'myirc_db'
});
