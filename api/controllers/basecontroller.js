import * as baseservice from './../services/baseservice.js';

// this function is used to set response fetch from db 
// const setResponse = (obj,response) => {
//     response.status(200);
//     response.json(obj);
// }

// // this function is used to set the error in response 
// const setError = (err, response) => {
//     response.status(500);
//     response.json(err);
// }


export const get = async (req, res) => {
    try{
        const todoTask = await baseservice.dbConnect(req,res);
        console.log("after controller")
       
    }catch(error){
        
    }
}