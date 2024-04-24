const { MongoGridFSChunkError } = require('mongodb');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String, unique:true},
    age: Number,
    senha: String
});

// encriptar senha
userSchema.pre('save', async function(next) {
    const user = this;

    if (!user.isModified('senha')) return next();

    try {
        const cryptPassword = await bcrypt.hash(user.senha, 10);
        user.senha = cryptPassword;
        next();
    } catch (error) {
        return next(error);
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;