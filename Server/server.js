import express from 'express'
import cors from 'cors'


const app = express()

app.use(cors({ origin: 'http://localhost:5173' }))

app.use(express.json())



app.get('/', (req, res)=>{
    res.send([{name:"ashwani", subject:"node"}, {name:"utkarsh", subject:"react"}, {name:"sunny", subject:"react"}, {name:"omkar", subject:"react"}])
})

app.listen(5000, ()=>{
    console.log("server running at http://localhost:5000")
})




