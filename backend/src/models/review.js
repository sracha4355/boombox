import mongoose from 'mongoose'
const { Schema } = mongoose;
const reviewSchema = new Schema({
	user: String,
	text: String,
	likes: Number,
	rating: Number
})

export const Review = mongoose.model('Review', reviewSchema)
