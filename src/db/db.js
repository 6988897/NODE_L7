const fs = require("fs");
const path = require("path");

const CONCERTS_PATH = path.join(__dirname, "concerts.json");
const TICKETS_PATH = path.join(__dirname, "tickets.json");

const readData = (entity) => {
  try {
    let filePath;
    if (entity === "concerts") filePath = CONCERTS_PATH;
    if (entity === "tickets") filePath = TICKETS_PATH;

    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify([]));
    }

    const rawData = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(rawData);
  } catch (error) {
    throw new Error(`Ошибка чтения данных: ${error.message}`);
  }
};

const writeData = (entity, newData) => {
  try {
    let filePath;
    if (entity === "concerts") filePath = CONCERTS_PATH;
    if (entity === "tickets") filePath = TICKETS_PATH;

    fs.writeFileSync(filePath, JSON.stringify(newData, null, 2));
  } catch (error) {
    throw new Error(`Ошибка записи данных: ${error.message}`);
  }
};

module.exports = { readData, writeData };