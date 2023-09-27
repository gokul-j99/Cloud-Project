import baseRouter from './baseRouter.js';
export default(app) => {
    app.use('/healthz',baseRouter)
    app.use((req, res) => {
        res.set('Cache-Control', 'no-cache');
        res.status(404).end();
    });
}