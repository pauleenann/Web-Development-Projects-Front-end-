import mysql from 'mysql'
import express from 'express'
import cors from 'cors'

const app =express()
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'taskboard'
})



app.get('/task',(req,res)=>{
    const q = "SELECT * FROM task"

    db.query(q, (err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/task/:id',(req,res)=>{
    const id = req.params.id
    const q = "SELECT * FROM task WHERE id = ?"

    db.query(q, id, (err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/task',(req,res)=>{
    const q = "INSERT INTO task (`task_name`,`task_description`,`task_icon`,`task_status`) VALUES (?)"

    const values = [
        req.body.task_name,
        req.body.task_description,
        req.body.task_icon,
        req.body.task_status
    ]

    db.query(q, [values], (err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.put('/task/:id',(req,res)=>{
    const id = req.params.id

    const q = "UPDATE task SET `task_name`=?,`task_description`=?,`task_icon`=?,`task_status`=?  WHERE id = ?"

    const values = [
        req.body.task_name,
        req.body.task_description,
        req.body.task_icon,
        req.body.task_status
    ]

    db.query(q, [...values,id], (err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.delete('/task/:id',(req,res)=>{
    const id = req.params.id
    const q = "DELETE FROM task WHERE id =?"

    db.query(q, [id], (err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.listen(8801,()=>{
    console.log('this is the backend')
})