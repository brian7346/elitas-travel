const Plane = require("../modles/planes");

const getPlanes = async (req, res) => {
  try {
    // Список самолётов
    const planes = await Plane.find();

    res.status(200).json(planes);
  } catch {
    res.status(500).json({ message: "Не удалось получить список самолетов, повторите попытку познее" });
  }
};

const getPlane = async (req, res) => {
  try {
    // Один самолет
    const plane = await Plane.find({ _id: req.params.id });

    res.status(200).json(plane);
  } catch {
    res.status(404).json({
      message: "Самолёт не найден"
    })
  }
};

const createPlane = async (req, res) => {
  const errors = {};

  if (!req.body.name) {
    errors.name = { message: "Пожалуйста, укажите название" };
  }

  if (!req.body.price) {
    errors.price = { message: "Пожалуйста, укажите цену" };
  }

  if (!req.body.description) {
    errors.description = { message: "Пожалуйста, укажите описание" };
  }

  if (req.body.description.length > 700) {
    errors.description = { message: "Слишком длинное описание" };
  }

  if (!req.body.capacity) {
    errors.capacity = { message: "Пожалуйста, укажите вместимость" };
  }

  if (req.body.capacity.length > 2) {
    errors.capacity = { message: "Вместимость не может быть больше 99" };
  }

  if (!req.file) {
    errors.planeImage = { message: "Пожалуйста, добавьте фото самолёта" };
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json(errors);
  }

  try {
    const { name, price, description, capacity } = req.body;
  
    // Самолёт для сохранения в Монго/Базу Данных
    const plane = await Plane.create({
      name,
      price,
      description,
      capacity,
      planeImage: `http://localhost:${process.env.PORT}/static/${req.file.filename}`
    });
  
    res.status(201).json(plane);
  } catch(err) {
    res.status(500).json({ message: "Не удалось создать самолет, повторите попытку познее" });
  }
};

module.exports = {
  getPlanes,
  getPlane,
  createPlane,
};
