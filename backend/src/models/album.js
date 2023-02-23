import mongoose from 'mongoose'
import {Track} from './track.js'
import {Review} from './review.js'

const { Schema } = mongoose;
const albumSchema = new Schema({
	artist: String,
	name: {
		type: String,
		required: true
	},
	tracklist: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: Track
	}],
	reviews: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: Review
	}],
	rating: Number,
	releaseDate: Date
})

export const Album = mongoose.model('Album', albumSchema)