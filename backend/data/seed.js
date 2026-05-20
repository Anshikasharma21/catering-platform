    const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Caterer = require("../models/Caterer");

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const caterers = [
  {
    name: "Royal Caterers",
    location: "Mumbai",
    pricePerPlate: 500,
    cuisines: ["Indian", "Chinese"],
    rating: 4.5,
  },
  {
    name: "Spice Garden Catering",
    location: "Pune",
    pricePerPlate: 700,
    cuisines: ["Punjabi", "South Indian"],
    rating: 4.2,
  },
  {
    name: "Elite Events Catering",
    location: "Delhi",
    pricePerPlate: 1000,
    cuisines: ["Italian", "Continental"],
    rating: 4.8,
  },
  {
    name: "Food Fiesta",
    location: "Bangalore",
    pricePerPlate: 650,
    cuisines: ["Mexican", "Indian"],
    rating: 4.1,
  },
  {
    name: "Tandoori Treats",
    location: "Ahmedabad",
    pricePerPlate: 550,
    cuisines: ["North Indian", "Tandoori"],
    rating: 4.3,
  },
  {
    name: "Ocean Pearl Catering",
    location: "Chennai",
    pricePerPlate: 800,
    cuisines: ["Seafood", "South Indian"],
    rating: 4.4,
  },
  {
    name: "Heritage Flavors",
    location: "Jaipur",
    pricePerPlate: 600,
    cuisines: ["Rajasthani", "Indian"],
    rating: 4.2,
  },
  {
    name: "Green Leaf Caterers",
    location: "Kolkata",
    pricePerPlate: 450,
    cuisines: ["Bengali", "Vegetarian"],
    rating: 4.0,
  },
  {
    name: "Spice Route Kitchens",
    location: "Goa",
    pricePerPlate: 900,
    cuisines: ["Continental", "Goan"],
    rating: 4.6,
  },
  {
    name: "Royal Feast Catering",
    location: "Hyderabad",
    pricePerPlate: 750,
    cuisines: ["Hyderabadi", "Mughlai"],
    rating: 4.5,
  },
  {
    name: "Urban Tadka",
    location: "Mumbai",
    pricePerPlate: 520,
    cuisines: ["Street Food", "Indian"],
    rating: 4.1,
  },
  {
    name: "Golden Spoon Catering",
    location: "Delhi",
    pricePerPlate: 1100,
    cuisines: ["Italian", "French"],
    rating: 4.7,
  },
  {
    name: "Desi Delights",
    location: "Lucknow",
    pricePerPlate: 480,
    cuisines: ["Awadhi", "North Indian"],
    rating: 4.3,
  },
  {
    name: "Curry Culture",
    location: "Pune",
    pricePerPlate: 650,
    cuisines: ["Indian", "Fusion"],
    rating: 4.2,
  },
  {
    name: "Banquet Bliss",
    location: "Bangalore",
    pricePerPlate: 850,
    cuisines: ["Multi-cuisine"],
    rating: 4.6,
  },
  {
    name: "Flavors of Punjab",
    location: "Chandigarh",
    pricePerPlate: 700,
    cuisines: ["Punjabi", "North Indian"],
    rating: 4.4,
  },
  {
    name: "Saffron Table",
    location: "Mumbai",
    pricePerPlate: 950,
    cuisines: ["Mughlai", "Indian"],
    rating: 4.7,
  },
  {
    name: "Taste Hub Catering",
    location: "Indore",
    pricePerPlate: 500,
    cuisines: ["Street Food", "Indian"],
    rating: 4.0,
  },
  {
    name: "The Gourmet Studio",
    location: "Delhi",
    pricePerPlate: 1200,
    cuisines: ["Continental", "European"],
    rating: 4.9,
  },
  {
    name: "Happy Plates Catering",
    location: "Surat",
    pricePerPlate: 550,
    cuisines: ["Gujarati", "Vegetarian"],
    rating: 4.2,
  },
];

const importData = async () => {
  try {
    await Caterer.deleteMany();

    await Caterer.insertMany(caterers);

    console.log("Sample Data Inserted");

    process.exit();
  } catch (error) {
    console.log(error);

    process.exit(1);
  }
};

importData();