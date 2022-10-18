const mongoose = require("mongoose");


const documentSchema = new mongoose.Schema({

    document: {
        type: String
    }

}, {
    timestamps: true
});


const document = mongoose.model('document', documentSchema);

module.exports = document;