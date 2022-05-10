const express = require("express");
const { getPlanes, createPlane, getPlane } = require("../controllers/planes");
const router = express.Router();

const multer = require("multer");
const path = require('path');

const storage = multer.diskStorage({
  destination: './assets/',
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({ storage })

router.get("/", getPlanes);
router.get("/:id", getPlane);
router.post("/", upload.single('planeImage'), createPlane);

module.exports = router;
