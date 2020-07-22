const express = require("express")
const webPush = require("web-push")
const path = require("path")
const bodyParser = require("body-parser")


const app = express()
app.use(express.static(path.join(__dirname,"../public")))
app.use(express.json())

const publicVapidKey = "BOjz-Yst7KIWeQxJk9u2rBmGgFHIfnIRZ488NLbMNXIeBNQVeEwiCSFrJWWZMgvf8YUHBCE5GWo4ekYEYh3kSVg"
const privateVapidKey = "mRVmRQgN5CYPTeuGkZuOCiiJlHyjezqI6kya_kd4Efk"

webPush.setVapidDetails("mailto:test@test.com",publicVapidKey,privateVapidKey)

// app.get("/", (req,res)=>{
//     res.render("index")
// })

app.post("/subscribe", (req,res)=>{
    console.log(req.body)
    const subscription = req.body

    const payload = JSON.stringify({title : "Web Push"})

    webPush.sendNotification(subscription, payload).catch(err=>{console.log(err)})

    res.status(201).json({ok:"ok"})
    console.log("going on...")

    
})


const port = 8000

app.listen(port, ()=>{
    console.log("app is up and running on port " + port)
})