const { Router } = require("express");
const stats = require("../controllers/stats.controller");

const router = Router();

router.get("/", stats.getStats);
router.get("/:id", stats.getStat);
router.post("/create", stats.createStats);
router.post("/delete", stats.deleteStats);

module.exports = router;
