import express from 'express';
import * as basecontroller from './../controllers/basecontroller.js';

const Router = express.Router();

Router.route('/').get(basecontroller.get)
.all((req, res) => { 
    res.status(405).end();
    res.set('Cache-Control', 'no-cache');
  });

export default Router;