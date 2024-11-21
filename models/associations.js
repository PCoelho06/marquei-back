const User = require("./user.model");
const Salon = require("./salon.model");
const Resource = require("./resource.model");
const Service = require("./service.model");
const Appointment = require("./appointment.model");
const Review = require("./review.model");

module.exports = {
  associations: [
    [User, Salon, "OneToMany", { foreignKey: "owner_id", as: "owner-salons" }],
    [
      Salon,
      Resource,
      "OneToMany",
      { foreignKey: "salon_id", as: "salon-resources" },
    ],
    [
      Resource,
      Appointment,
      "OneToMany",
      { foreignKey: "resource_id", as: "resource-appointments" },
    ],
    [
      Salon,
      Service,
      "OneToMany",
      { foreignKey: "salon_id", as: "salon-services" },
    ],
    [
      Service,
      Appointment,
      "OneToMany",
      { foreignKey: "service_id", as: "service-appointments" },
    ],
    [
      User,
      Appointment,
      "OneToMany",
      { foreignKey: "user_id", as: "user-appointments" },
    ],
    [User, Review, "OneToMany", { foreignKey: "user_id", as: "user-reviews" }],
    [
      Salon,
      Review,
      "OneToMany",
      { foreignKey: "salon_id", as: "salon-reviews" },
    ],
  ],
};
