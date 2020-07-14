var mongoose = require('mongoose');
var saloon = process.env.SALOON_COLLECTION;
// var saloon = 'saloon_details';

var saloonSchema = new mongoose.Schema({
    _id : mongoose.Schema.ObjectId,
    saloon_id : Number,
    saloon_name : String,
    saloon_owner: String,
    phone_registered: Number,
    saloon_type : String,
    saloon_rating: Number,
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now},
    location: {
        type: {
          type: String,
          enum: ['Point'],
          default: 'Point',
        },
        coordinates: {
          type: [Number],
          default: [0, 0],
        }
    },
    address :{line1: String,
              line2: String},
    offer : Number,
    services : [
        {
            
            _id : mongoose.Schema.ObjectId,
                    service_id : Number,
                    service_gender : String,
                    category_name : String,
                    service_name : String,
                    offer :String,
                    cost : Number,
                    max_occupancy : Number,
                    max_time : Number,
                    ser_count : Number  ,
                    availablity : []
                
            
        }
    ],
    stylists : [
        {
            _id : mongoose.Schema.ObjectId,
            stylist_id : Number,
            stylist_name:String,
            stylist_gender : String,
            availablity : [{
                from : Date,
                to: Date
            }],
        }
    ],
    offDays: [ String ]
}, { collection: saloon });

saloonSchema.index({location: '2dsphere'});
// saloonSchema.createIndexes();

mongoose.model(saloon, saloonSchema);
module.exports = mongoose.model(saloon);