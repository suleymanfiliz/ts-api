import express from 'express'
import homeRoutes from './home'
import userRoutes from './user'

export default function (app: express.Application)
{
   homeRoutes(app)
   userRoutes(app)


}