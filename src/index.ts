import dotenv from 'dotenv';
dotenv.config()


import { SlashTemplate } from './templates/SlashTemplate';
import colors from 'colors';
const startMsg :string  = colors.bgYellow('Start SERVER-SIDE');
const startExpress: string = `Server is running on port ${Number(process.env.PORT)}`
console.log(startMsg);



import express, {Request, Response} from 'express'
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();

app.use(express.static(path.resolve(__dirname, '/public/')))

app.use(cors());
app.use(express.json())


app.get('/ping', (req:Request, res:Response) => {
    res.json('PONG')
})


app.get('/', (req:Request, res:Response)=>{
    res.send(SlashTemplate)
})

app.listen(`${Number(process.env.PORT)}`, ()=>{
    console.log(colors.bgGreen(startExpress));
})