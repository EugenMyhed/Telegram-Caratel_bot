const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MemberSchema = new Schema({
    name:{
        type: String,
        required: true
    }
});
mongoose.model('members', MemberSchema);