const app = require("./src/app.js")


require('dotenv').config()
const port = process.env.PORT || 5000

// !important! 
// you need to install the following libraries |express|[dotenv > if required]
// or run this command >> npm i express dotenv 

app.get('/' , (req , res)=>{

    let result = 'hello from simple server LAN ANH IU THIEN:)'
   res.send(result.repeat(200))

})




const server = app.listen(port , ()=> console.log('> Server is up and running on port : ' + port)) 

process.on('SIGINT', () => {
    server.close( () => {
        console.log("server has stop!");
    })
})