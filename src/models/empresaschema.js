const mongoose = require('mongoose');

const empresaSchema = mongoose.Schema({

    nombre:{
        type: String,
        required : true
    },
    numerodocumento :{
        type: Number,
        required: true
    },
    correoelectronico : {
        type: String,
        required:true
    }
});

module.exports = mongoose.model("Empresa",empresaSchema);