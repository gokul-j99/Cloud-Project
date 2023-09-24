import baseRouter from './baseRouter.js';
export default(app) => {
    app.use('/healtz',baseRouter);
}