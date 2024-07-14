const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    title: String,
    description: String,
    status: String
}, {timestamps:true })

cardSchema.set('toJSON', {getters: true, virtuals: false})

const cardCollection = mongoose.model('card', cardSchema)

module.exports = cardCollection;