const express = require("express");
const { getPlanes, createPlane, getPlane } = require("../controllers/planes");
const router = express.Router();

const multer = require("multer");
const path = require('path');

// Показываем, где хранить загружаемые файлы
const storage = multer.diskStorage({
  destination: './assets/',
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({ storage })

// @route GET /api/planes
// @desc Получить все самолёты
router.get("/", getPlanes);

// @route GET /api/planes/:id
// @desc Получить самолёт по id
router.get("/:id", getPlane);

// @route POST /api/planes
// @desc Создать самолёт
router.post("/", upload.single('planeImage'), createPlane);

module.exports = router;
