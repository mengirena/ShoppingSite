const express = require("express");
const Articles = require("./articles/Articles");

//list of article
const ARTICLES = require("./constants/Articles")

const PORT = process.env.PORT | 5000

const app = express()

const ResponseManagement = require('./common/handleResponses');

app.get("/articles", (req, res, next) => {
    res.json(ARTICLES)
})

app.get("/articles/:articleId", (req, res, next) => {
    const articleId = req.params.articleId
    console.log(articleId)
    console.log(Articles)
    return  Articles.get(articleId)
        .then(response => ResponseManagement.handleSuccessResponse(req, res, response))
        .catch(error => ResponseManagment.handleErrorResponse(req, res, error))
})

app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`)
})