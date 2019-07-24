const mongoose = require('mongoose');
const { Schema } = mongoose;


const monthSchema = new Schema({
    monthId: String,
    name: String,
    startingDay: Number,
    image:String
})

mongoose.model('months', monthSchema);