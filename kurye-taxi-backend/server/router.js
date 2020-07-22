const express = require('express');
const {loginAuthenticate} = require("./authenticate/loginAuthenticate")
const cors = require("cors");
//const bodyParser = require("body-parser");  router.use(express.json()) kodu ile router.use(bodyParser.json()) a gerek kalmadı...

const router = new express.Router();

router.use(express.json());

// cross origin resource sharing için gereken kod 
// bu kodun hem server.js tarafında hem de burada kullanılması gerekiyor...
router.use(cors());

router.post("/login", loginAuthenticate, (req, res)=>{
    
    res.send("ok");
})



module.exports= router;