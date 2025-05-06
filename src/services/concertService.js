const db = require("../db/db");

const getAllConcerts = async () => {
  return db.readData("concerts");
};

const createConcert = async (concert) => {
  const concerts = await db.readData("concerts");
  concerts.push(concert);
  await db.writeData("concerts", concerts);
  return concert;
};

const getConcertById = async (id) => {
  const concerts = await db.readData("concerts");
  return concerts.find((c) => c.id === id);
};

const updateConcert = async (id, newData) => {
  const concerts = await db.readData("concerts");
  const index = concerts.findIndex((c) => c.id === id);
  if (index === -1) throw new Error("Концерт не найден");
  concerts[index] = { ...concerts[index], ...newData };
  await db.writeData("concerts", concerts);
  return concerts[index];
};

const patchConcert = async (id, partialData) => {
  const concerts = await db.readData("concerts");
  const index = concerts.findIndex((c) => c.id === id);
  if (index === -1) throw new Error("Концерт не найден");
  concerts[index] = { ...concerts[index], ...partialData };
  await db.writeData("concerts", concerts);
  return concerts[index];
};

const deleteConcert = async (id) => {
  const concerts = await db.readData("concerts");
  const filteredConcerts = concerts.filter((c) => c.id !== id);
  await db.writeData("concerts", filteredConcerts);
};

module.exports = {
  getAllConcerts,
  createConcert,
  getConcertById,
  updateConcert,
  patchConcert,
  deleteConcert,
}; 