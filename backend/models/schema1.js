const mongoose = require('mongoose');

///construction du schema qui va nous aider à interagir avec la base de données
const thingSchema = mongoose.Schema({

/*
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: String, required: true },
  price: { type: Number, required: true },*/

  iso_code: {
    type: String,
    required: true
  },
  continen: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  last_updated_date: {
    type: String,
    required: true
  },
  total_cases: {
    type: String,
    required: true
  },
  new_cases: {
    type: String,
    required: true
  },
  total_deaths: {
    type: String,
    required: true
  },
  total_cases_per_million: {
    type: String,
    required: true
  },
  total_deaths_per_million: {
    type: String,
    required: true
  },
  total_vaccinations: {
    type: String,
    required: true
  },
  people_vaccinated: {
    type: String,
    required: true
  },
  people_fully_vaccinated: {
    type: String,
    required: true
  },
  total_vaccinations_per_hundred: {
    type: String,
    required: true
  },
  people_vaccinated_per_hundred: {
    type: String,
    required: true
  },
  people_fully_vaccinated_per_hundred: {
    type: String,
    required: true
  },
  population: {
    type: String,
    required: true
  },
  population_density: {
    type: String,
    required: true
  },
  median_age: {
    type: String,
    required: true
  },
  aged_65_older: {
    type: String,
    required: true
  },
  aged_70_older: {
    type: String,
    required: true
  },
  life_expectancy: {
    type: String, 
    required: true
  }

  
}   , { collection: 'DataWeb' });

///on exporte le schema , La méthode  model  transforme ce modèle en un modèle utilisable.
module.exports = mongoose.model('DataWeb', thingSchema); 