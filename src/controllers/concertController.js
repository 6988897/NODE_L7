const { v4: uuidv4 } = require("uuid");
const ConcertService = require("../services/concertService");

const getAllConcerts = async (req, res) => {
  try {
    const concerts = await ConcertService.getAllConcerts();
    res.status(200).json(concerts);
  } catch (error) {
    res.status(500).json({ error: "Ошибка сервера" });
  }
};

const createConcert = async (req, res) => {
  try {
    const newConcert = { id: uuidv4(), ...req.body };
    await ConcertService.createConcert(newConcert);
    res.status(201).json(newConcert);
  } catch (error) {
    res.status(400).json({ error: "Некорректные данные" });
  }
};

const getConcertById = async (req, res) => {
  try {
    const concert = await ConcertService.getConcertById(req.params.id);
    if (!concert) {
      return res.status(404).json({ error: "Концерт не найден" });
    }
    res.status(200).json(concert);
  } catch (error) {
    res.status(500).json({ error: "Ошибка сервера" });
  }
};

const updateConcert = async (req, res) => {
  try {
    const updatedConcert = await ConcertService.updateConcert(req.params.id, req.body);
    res.status(200).json(updatedConcert);
  } catch (error) {
    res.status(400).json({ error: "Некорректные данные" });
  }
};

const patchConcert = async (req, res) => {
  try {
    const patchedConcert = await ConcertService.patchConcert(req.params.id, req.body);
    res.status(200).json(patchedConcert);
  } catch (error) {
    res.status(400).json({ error: "Некорректные данные" });
  }
};

const deleteConcert = async (req, res) => {
  try {
    await ConcertService.deleteConcert(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: "Концерт не найден" });
  }
};

module.exports = {
  getAllConcerts,
  createConcert,
  getConcertById,
  updateConcert,
  patchConcert,
  deleteConcert,
};