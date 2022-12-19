const mongoose = require("mongoose")

const bankSchema = mongoose.Schema(
    {
        name: String,
        surname: String,
        father_name: String,
        phone: Number,
        relative_number: Number,
        house_number: Number,
        relative_number2: Number,
        maosh: Number,
        photo: Array,
        pending: {type: Boolean, default: false},
        userId: {
            type: mongoose.Schema.ObjectId, 
            ref: "User"
        },
        status: {type: Boolean, default: false},
        date: {type :Date, default: Date.now()}
    }
)

module.exports = mongoose.model("Bank", bankSchema)
