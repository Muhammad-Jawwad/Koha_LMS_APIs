const express = require('express');
const oracledb = require('oracledb');

const app = express();

const dbConfig = {
    user: 'your-username',
    password: 'your-password',
    connectString: 'your-connect-string',
};

async function initialize() {
    try {
        await oracledb.createPool(dbConfig);
        console.log('Connected to Oracle Database');
    } catch (err) {
        console.error('Error connecting to Oracle Database: ', err);
    }
}

initialize();

// Rest of your Express.js application code goes here
