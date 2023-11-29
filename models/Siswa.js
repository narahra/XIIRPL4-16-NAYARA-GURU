const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'add your name']
       
    },
    nis: {
        type: String,
        required: [true, 'add your nis'],
        unique: true
    },
    departement: {
        type: String,
        required: [true, 'add your departement']
        
    },
    class: {
        type: String,
        required: [true, 'add your class']
    
    },
    email: {
        type: String,
        required: true
       
    }
})

module.exports = mongoose.model('Siswa', UserSchema)