'use-strict';

const routes = (router) => {

    
    // todo
    const  todo = require('./api/TodoRoutes');
    router.use("/todo" , todo)
    
    router.get('/' , (req,res) => {
        res.send("hello world! , 404");
    })



}


module.exports = routes;