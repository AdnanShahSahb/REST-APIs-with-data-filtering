const mongoos = require('mongoose')

const prodSchema = new mongoos.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    featured: {

        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.9
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ["apple", "samsung", "dell", "mi"],
            message: `{VALUE} is not supported`
        }
    }
})


module.exports = mongoos.model("ProductModel", prodSchema)


// const mongoos = require('mongoose')

// const prodSchema = new mongoos.Schema({
//     name: {
//         type: [String, "name must be string"],
//         required: [true, "name must be added"]
//     },
//     price: {
//         type: [Number, "Price must be number"],
//         required: [true, "Price must be added"]
//     },
//     featured: {

//         type: [Boolean, "featured must be boolean"],
//         default: false
//     },
//     rating: {
//         type: [Number, "rating must be number"],
//         default: 4.9
//     },
//     createdAt: {
//         type: [Date, "must be date"],
//         default: Date.now()
//     },
//     company: {
//         type: [String, "must be string "],
//         enum: {
//             values: ["apple", "samsung", "dell", "mi"],
//             message: `{VALUE} is not supported`
//         }
//     }
// })


// module.exports = mongoos.model("ProductModel", prodSchema)