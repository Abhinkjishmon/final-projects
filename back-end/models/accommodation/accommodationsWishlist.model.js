const mongoose = require("mongoose");

const AccommodationsWishlistSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  accommodations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Accommodation",
      required: true,
    },
  ],
});

module.exports = mongoose.model(
  "AccommodationsWishlist",
  AccommodationsWishlistSchema
);
