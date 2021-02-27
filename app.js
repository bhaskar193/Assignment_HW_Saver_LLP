const express = require('express')
const request = require('request')
const app = express()
app.set("view engine", "ejs")

 app.get("/homepage", (req, res)=>{
    const url = `https://api.nasa.gov/planetary/apod?api_key=HGYIguGHeezGxfaNLlxh2htU13KF2azeSIi7T4Ko`
    request(url, function (error, response, body){
        if(!error && response.statusCode == 200){
            const data = JSON.parse(body)
            // res.send("Succes")
            res.render("homepage.ejs", {imagedata: data})
            // console.log(data)
        }else{
            res.send("Error hai bhai")
        }
    })
})
app.get("/", (req, res)=>{
   res.render("welcomepage.ejs")
})
app.get("/imagespage", (req, res)=>{
    res.render("imagespage.ejs")
})
app.get("/imagesResults", (req, res)=>{
    const url = `https://api.unsplash.com/search/photos?query=${req.query.imageName}&client_id=nd95arSdT8Lc-uyDEtq9FAX4qdCSQobUtsQZaEWyUHQ`
    request(url, function (error, response, body){
        if(!error && response.statusCode == 200){
            const data = JSON.parse(body)
            res.render("imagesResults.ejs", {UNSPimageData: data})
            console.log(data)
        }else{
            res.send("Error hai bhai")
        }
    })
})


 app.get("*", (req, res)=>{
    res.send("INVALID ROUTE!")
}) 



 app.listen(3000, ()=>{
     console.log('SERVER STARTED')
 })