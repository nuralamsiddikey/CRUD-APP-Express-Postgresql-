const express = require('express')
const app     = express()

const studentRoutes = require('./src/student/routes')


app.use(express.json())
app.use('/api/v1/students',studentRoutes)

 
app.listen(5000,()=>{
     console.log('Backend server is listening at port 5000')
})     