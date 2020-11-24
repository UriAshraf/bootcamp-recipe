const express = require('express')
const app = express()
const path = require('path')
const urllib = require('urllib')



app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))


const json = {
    data: {}
}


app.get('/recipes/:ingredient', function (req, res) {
    const ingredient = req.params.ingredient
    
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function(err, res){
    const result = JSON.parse(res.toString())
     json.data = result.results
    
    console.log(json.data)
})

    res.send(json.data)
})


app.get('/', function (request, response) {
    console.log("Someone has come into the server. Brace yourselves.")
    response.send("Ending the cycle, thanks for visiting")
})



const port = 8080
app.listen(port, function(){
    console.log(`server running on port ${port}`)
})