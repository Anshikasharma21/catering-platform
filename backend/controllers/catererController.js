const Caterer = require("../models/Caterer");

// GET all caterers
const getCaterers = async (req, res) => {
  try {
    const caterers = await Caterer.find();

    res.json(caterers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET caterer by ID
const getCatererById = async (req, res) => {
  try {
    const caterer = await Caterer.findById(req.params.id);

    if (!caterer) {
      return res.status(404).json({
        message: "Caterer not found",
      });
    }

    res.json(caterer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST caterer
const createCaterer = async (req, res) => {
  try {

    // MULTIPLE DATA INSERT
    if (Array.isArray(req.body)) {

      const savedCaterers = await Caterer.insertMany(req.body);

      return res.status(201).json(savedCaterers);
    }

    // SINGLE DATA INSERT
    const { name, location, pricePerPlate, cuisines, rating } = req.body;

    // Validation
    if (
      !name ||
      !location ||
      !pricePerPlate ||
      !cuisines ||
      !rating
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const caterer = new Caterer({
      name,
      location,
      pricePerPlate,
      cuisines,
      rating,
    });

    const savedCaterer = await caterer.save();

    res.status(201).json(savedCaterer);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCaterers,
  getCatererById,
  createCaterer,
};