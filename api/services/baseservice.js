import Sequelize  from 'sequelize';

export const dbConnect = async (req, res,sequelizeInstance = null) => {

    console.log("inside service");
    if (req.headers['content-length'] > 0){
        res.set('Cache-Control', 'no-cache');
        return res.status(400).end(); 
    }
    if (Object.keys(req.query).length > 0) {
        res.set('Cache-Control', 'no-cache');
        return res.status(400).end(); 
    }

    else{


        if (!sequelizeInstance) {
            sequelizeInstance = new Sequelize('mysql://root:msdIndu%4099@localhost:3306/projectManagement', {
                dialectOptions: {
                    ssl: false  
                },
                timezone: 'America/New_York' 
            });
        }


//     const sequelize = new Sequelize('mysql://root:msdIndu%4099@localhost:3306/projectManagement', {
//     dialectOptions: {
//         ssl: false  
//     },
//     timezone: 'America/New_York' 
// });
console.log("Before authenticate");
sequelizeInstance.authenticate()
    .then(() => {
        console.log("inside db") 
        res.set('Cache-Control', 'no-cache');
        res.status(200).end();  
        console.log('Connection has been established successfully.');

    })
    .catch(err => {
        console.log("Error block reached"); 
        res.set('Cache-Control', 'no-cache');
        res.status(503).end(); 
        console.error('Unable to connect to the database:', err);
         
    });

}

return res;
}
