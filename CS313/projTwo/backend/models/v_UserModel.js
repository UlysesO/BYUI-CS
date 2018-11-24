const mongoose = require('mongoose');

const vUserSchema = mongoose.Schema({
    userId: { type: String, required: true},
    username: { type: String, required: true},
    password: { type: String, required: true},
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    middleName: { type: String, required: true},
    heightInInches: { type: Number, required: true},
    weightInPounds: { type: Number, required: true},
    goalWeightInPounds: { type: Number, required: true},
    age: { type: Number, required: true}
});

module.exports = mongoose.model('v_User', vUserSchema);