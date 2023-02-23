import mongoose from 'mongoose'
import { Review } from './review.js';
const { Schema } = mongoose;

const trackSchema = new Schema({
	single: Boolean,
	artist: String,
	name: {
		type: String,
		required: true
	},
	reviews: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: Review
	}],
	rating: Number,
	releaseDate: Date
})

export const Track = mongoose.model('Track', trackSchema)