const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    // slug: {
    //     type: String,
    //     required: true,
    //     unique: true

    // },

    price: {
        type: Number,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        require: true,
        trim: true
    },
    offer: {
        type: Number
    },
 
    productPictures: [
        {
            img: { type: String }
        }
    ],
    reviews: [
        {
            userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            review: String
        }
    ],
    outOfStock:{
        type: String,
        enum: ['Yes','No'],
        default: 'No'
    },
    category: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true
    },
    ParCategory: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: true

    },
    shopLocation: {
        type: mongoose.Schema.Types.ObjectId, ref: 'StoreLocation', required: true

    },
    updatedAt: Date,


}, { timestamps: true });


module.exports = mongoose.model("Product", productSchema)