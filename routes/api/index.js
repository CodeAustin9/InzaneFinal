const router = require("express").Router();
const clientRoutes = require("./client");

// Book routes
router.use("/client", clientRoutes);

module.exports = router;
