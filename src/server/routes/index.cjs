const router = require("express").Router();

// Import our files containing our routes
const problemRouter = require("./problem.cjs");
const userRouter = require("./user.cjs");

router.use("/problem", problemRouter);
router.use("/user", userRouter);

module.exports = router;
