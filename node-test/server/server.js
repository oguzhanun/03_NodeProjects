const express = require('express');

const app = express();


app.get('/', (req,res) => {
    res.send({
        name:'oguzhan'
    })
})



app.get("/users", (req, res) => {

    res.send([
        {
            firstName : 'oguzhan',
            lastName : 'un'
        },
        {
            firstName : 'jessy',
            lastName : 'james'
        },
        {
            firstName : 'alice',
            lastName : 'wonderlande'
        }
    ])
});


app.listen(3000);


module.exports.app = app;