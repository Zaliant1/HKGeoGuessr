const router = require("express").Router();

// Import our files containing our routes
const problemRouter = require("./problem.js");
const userRouter = require("./user.js");

router.use("/problem", problemRouter);
router.use("/user", userRouter);

module.exports = router;
