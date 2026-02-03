import express from 'express'
import dotenv from 'dotenv'
import mysql from 'mysql'
import bodyparser from 'body-parser'

dotenv.config()
 

const app = express()
app.use(bodyparser.json())


const conn = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})


conn.connect(function(err){
    if(err) throw new Error(err)
        console.log('Database connected successfully')
})


app.get('/student',function(req,res){

    conn.query('SELECT * FROM student',(err,results)=>{
        if(err) throw new Error(err)
        res.json({message: 'Got student ',results})
    })
})


app.get('/student/:id',function(req,res){
    const id = req.params.id
    conn.query('SELECT * FROM student where id = ?',[id],(err,results)=>{
        if(err) throw new Error(err)
        res.json({message: 'Got a student ',results})
    })
})


app.post('/student',function(req,res){
    const {first_name,last_name,email,gender,date_of_birth} = req.body
    conn.query('INSERT INTO student (first_name,last_name,email,gender,date_of_birth) VALUES(?,?,?,?,?)',[first_name,last_name,email,gender,date_of_birth],(err,results)=>{
        if(err) throw new Error(err)
        res.json({message: 'Added a student',results})
    })
})



app.put('/student/:id',function(req,res){
    const id = req.params.id
    const {first_name,last_name,email,gender,date_of_birth} = req.body
    conn.query('UPDATE student SET first_name = ?, last_name = ?, email = ?, gender = ?, date_of_birth = ? WHERE id = ?',[first_name,last_name,email,gender,date_of_birth,id],(err,results)=>{
        if(err) throw new Error(err)
        res.json({message: 'Updated a student',results})
    })
})


app.delete('/student/:id',function(req,res){
    const id = req.params.id
    conn.query('DELETE FROM student WHERE id = ?',[id],(err,results)=>{
        if(err) throw new Error(err)
        res.json({message: 'Deleted a student',results})
    })
})
app.listen(process.env.PORT, () => {
    console.log('Server is running on port 7000')
})

