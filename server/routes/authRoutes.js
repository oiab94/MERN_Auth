const { Router } = require("express");
const authController = require("../controllers/authController");
const {requireAuth} = require("../middleware/auth.middleware");

const router = Router();

router.get("/signup", authController.signup_get);
router.post("/signup", authController.signup_post);
router.get("/login", authController.signup_get);
router.post("/login", authController.login_post);
router.get("/logout", authController.logout_get);
router.get("/authPage", requireAuth);

module.exports = router;