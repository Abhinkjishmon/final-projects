const mongoose = require("mongoose");

const accommodationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    address: {
      street: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      zipCode: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      latitude: {
        type: Number,
        required: true,
      },
      longitude: {
        type: Number,
        required: true,
      },
    },
    location: {
      type: { type: String, enum: ["Point"], required: true },
      coordinates: { type: [Number], required: true },
    },
    rent: {
      type: Number,
      required: true,
    },
    utilitiesIncluded: {
      type: Boolean,
      default: false,
    },
    roomType: {
      type: String,
    },

    furnishing: {
      type: String,
      enum: ["fully furnished", "semi-furnished", "unfurnished"],
      required: true,
    },
    landlordId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    amenities: [
      {
        type: String,
      },
    ],
    images: [
      {
        type: String,
      },
    ],
    availabilityStatus: {
      type: String,
      enum: ["available", "booked", "unavailable"],
      required: true,
      default: "available",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

accommodationSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Accommodation", accommodationSchema);
