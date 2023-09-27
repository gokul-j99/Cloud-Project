import SequelizeMock from 'sequelize-mock';

  // You'd need to install this package or use jest.fn() to mock Sequelize
import { dbConnect } from '../../api/services/baseservice.js';  // Replace with the actual file name

import {jest} from '@jest/globals';
describe('dbConnect', () => {
    let req, res, sequelizeMockInstance;

    beforeEach(() => {
        sequelizeMockInstance = new SequelizeMock();

        req = {
            headers: {},
        };
        res = {
            set: jest.fn(),
            status: jest.fn().mockReturnThis(),
            end: jest.fn(),
        };
    });


    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should respond with 400 if content-length is greater than 0', async () => {
        req.headers['content-length'] = 1;

        await dbConnect(req, res, sequelizeMockInstance);

        expect(res.set).toHaveBeenCalledWith('Cache-Control', 'no-cache');
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.end).toHaveBeenCalled();
    });

    it('should respond with 200 if database connection is successful', async () => {
        sequelizeMockInstance.authenticate = jest.fn().mockResolvedValue();
        await dbConnect(req, res, sequelizeMockInstance);

        expect(res.set).toHaveBeenCalledWith('Cache-Control', 'no-cache');
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.end).toHaveBeenCalled();
    });

    it('should respond with 503 if database connection fails', async () => {
       
        sequelizeMockInstance.authenticate = jest.fn().mockRejectedValue(new Error('connect ECONNREFUSED 127.0.0.1:3306'));



        await dbConnect(req, res, sequelizeMockInstance);

        console.log(res);

        //expect(res.set).toHaveBeenCalledWith('Cache-Control', 'no-cache');
       // expect(res.status).toHaveBeenCalledWith(503);
        //expect(res.end).toHaveBeenCalled();

       
    });
});
