const db = require("../db/db");


const getAllTickets = async () => {
  return db.readData("tickets");
};


const createTicket = async (ticket) => {
  const tickets = await db.readData("tickets");
  tickets.push(ticket);
  await db.writeData("tickets", tickets);
  return ticket;
};


const getTicketById = async (id) => {
  const tickets = await db.readData("tickets");
  return tickets.find((t) => t.id === id);
};


const updateTicket = async (id, newData) => {
  const tickets = await db.readData("tickets");
  const index = tickets.findIndex((t) => t.id === id);
  if (index === -1) throw new Error("Билет не найден");
  tickets[index] = { ...newData, id }; 
  await db.writeData("tickets", tickets);
  return tickets[index];
};


const patchTicket = async (id, partialData) => {
  const tickets = await db.readData("tickets");
  const index = tickets.findIndex((t) => t.id === id);
  if (index === -1) throw new Error("Билет не найден");
  tickets[index] = { ...tickets[index], ...partialData };
  await db.writeData("tickets", tickets);
  return tickets[index];
};

const deleteTicket = async (id) => {
  const tickets = await db.readData("tickets");
  const filteredTickets = tickets.filter((t) => t.id !== id);
  await db.writeData("tickets", filteredTickets);
};

module.exports = {
  getAllTickets,
  createTicket,
  getTicketById,
  updateTicket,
  patchTicket,
  deleteTicket,
};