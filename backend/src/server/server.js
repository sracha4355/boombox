import {envConfig} from '../utility/envpath.js'
import express from 'express'
import mongoose from 'mongoose'
import readline from 'readline'

const app = express();
const apiKey = process.env.API_KEY
const secret = process.env.SECRET;

const dbConnect = () => {
	const conn_str = 
	`mongodb+srv://srach:${process.env.DB_PASS}@boombox.bdolfkx.mongodb.net/?retryWrites=true&w=majority`
	mongoose.connect(
	conn_str, 
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	},
	(err) => {
		if(err) {
			console.log(`ERROR: ${err}`)
		} else{
			console.log('Connection successfull')
		}
	});
}

const close = () => {
	mongoose.connection.close()
}

envConfig()
dbConnect()
close()

