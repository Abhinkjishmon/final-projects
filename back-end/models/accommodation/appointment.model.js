const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Assuming you have a User model
      required: true,
    },
    accommodationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Accommodation", // Assuming you have an Accommodation model
      required: true,
    },
    phoneNumber:{
      type:String,
      require:true,
    },
    specialRequests:{
      type:String,
    },
    date: {
      type: Date,
      required: true,
      validate: {
        validator: function (value) {
          return value >= new Date();
        },
        message: "Appointment date must be in the future.",
      },
    },
    time: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["request", "approve", "cancel"],
      required: true,
      default: "request",
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

// Indexing for efficient query performance
appointmentSchema.index({ userId: 1, accommodationId: 1, date: 1 });

module.exports = mongoose.model("Appointment", appointmentSchema);
