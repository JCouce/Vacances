const mongoose = require('mongoose');
const { Schema } = mongoose;


const daySchema = new Schema({
    dayId: String,
    monthId: String
})

mongoose.model('days', daySchema);