const mongoose = require('mongoose');
const { Schema } = mongoose;


const monthSchema = new Schema({
    monthId: String,
    name: String,
    image:String
})

mongoose.model('months', monthSchema);