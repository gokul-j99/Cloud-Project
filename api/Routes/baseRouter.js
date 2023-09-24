import express from 'express';
import * as basecontroller from './../controllers/basecontroller.js';

const Router = express.Router();

Router.route('/').get(basecontroller.get)
.all((req, res) => { 
    res.set('Cache-Control', 'no-cache');
    res.status(405).end();
    
  });

export default Router;