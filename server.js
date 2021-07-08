const express = require("express");

const ARTICLES = require("./constants/Articles")

const PORT = process.env.PORT | 5000

const app = express()

app.get("/articles", (req, res, next) => {
    res.json(ARTICLES)
})

app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`)
})