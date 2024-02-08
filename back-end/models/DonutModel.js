const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const donutSchema = new Schema ({

    nombre:{
        type: String,
        required: true,
    },
    tipo:{
        type: String,
        required: true,
    },
    precio:{
        type: Number,
        required: true
    }
})

const donut = mongoose.model("Donut", donutSchema, "Donut")

module.exports = donut