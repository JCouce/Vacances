const mongoose = require('mongoose');
const { Schema } = mongoose;
const User = require('./User');


const hollydayRequestSchema = new Schema({
    requestId: String,
    userId:String,
    dayId: String,
    monthId: String,
    status:String,
    createdAt:Date,
    updatedBy:User,
    lastModified:Date,
    message:String
})

mongoose.model('hollydaysRequest', hollydayRequestSchema);