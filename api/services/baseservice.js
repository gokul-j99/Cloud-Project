import Sequelize  from 'sequelize';

export const dbConnect = async (req, res) => {

    console.log("inside service");

    const sequelize = new Sequelize('mysql://root:msdIndu%4099@localhost:3306/projectManagement', {
    dialectOptions: {
        ssl: false  
    },
    timezone: 'America/New_York' 
});

sequelize.authenticate()
    .then(() => {
        console.log("inside db") 
        res.set('Cache-Control', 'no-cache');
        res.status(200).end();  
        console.log('Connection has been established successfully.');

    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
        res.set('Cache-Control', 'no-cache');
        res.status(503).end();  
        console.error('Unable to connect to the database:', err);
    });

    return res;
}
