const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const genreSchema = new Schema(
    {
        name: { type: String, required: true, minLength: 3, maxLength: 100 }
    }
);

// Virtual for URL
genreSchema
.virtual('url')
.get(function() {
    return `/catalog/genre/${this.id}`;
})

// Export model
module.exports = mongoose.model('Genre', genreSchema);