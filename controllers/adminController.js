const Registration = require("../models/registrationModel");

exports.getAdminPage = (req, res) => {
  Registration.find()
    .then((registrations) => {
      res.render("adminDashboard", { registrations });
    })
    .catch((err) => console.error("Error fetching registrations:", err));
};
