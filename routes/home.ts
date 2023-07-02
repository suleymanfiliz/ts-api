import express from 'express'

export default function  homeRoutes(app: express.Application)
{
    app.get('/',(req,res)=>{
        res.json({'foo' : 'home içindeki route'})
    })

}