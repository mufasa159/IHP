const express = require('express');
const db = require('../db');

const router = express.router();

router.get('/', async (reg, res, next) => {

    try {
        let results = await db.all();
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})