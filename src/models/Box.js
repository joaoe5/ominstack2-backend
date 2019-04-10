const mongoose = require('mongoose');

const Box = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    files: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'File'
    }]
}, {
    // cria o create_at - update_at automaticamente
    timestamps: true
});

module.exports = mongoose.model('Box', Box);