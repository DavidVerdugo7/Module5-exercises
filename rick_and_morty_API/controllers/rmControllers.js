// URL de la API
const axios = require("axios");
const API = "https://rickandmortyapi.com/api";

async function getCharacters(req, res) {
  try {
    const { name, species, gender, status, page } = req.query;

    const response = await axios.get(`${API}/character`, {
      params: { name, species, gender, status, page },
    });

    const characters = response.data.results || response.data;
    res.json(characters);
  } catch (error) {
    console.error("Error fetching characters:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  getCharacters,
};
