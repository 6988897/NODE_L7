const { v4: uuidv4 } = require("uuid");
const TicketService = require("../services/ticketService");
const ConcertService = require("../services/concertService");


const getAllTickets = async (req, res) => {
  try {
    const tickets = await TicketService.getAllTickets();
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ error: "Ошибка сервера" });
  }
};

const createTicket = async (req, res) => {
  try {
    const concertExists = await ConcertService.getConcertById(req.body.concertId);
    if (!concertExists) {
      return res.status(404).json({ error: "Концерт не найден" });
    }

    const newTicket = { id: uuidv4(), ...req.body };
    await TicketService.createTicket(newTicket);
    res.status(201).json(newTicket);
  } catch (error) {
    res.status(400).json({ error: "Некорректные данные" });
  }
};

const getTicketById = async (req, res) => {
  try {
    const ticket = await TicketService.getTicketById(req.params.id);
    if (!ticket) {
      return res.status(404).json({ error: "Билет не найден" });
    }
    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({ error: "Ошибка сервера" });
  }
};

const updateTicket = async (req, res) => {
  try {
    const updatedTicket = await TicketService.updateTicket(req.params.id, req.body);
    res.status(200).json(updatedTicket);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const patchTicket = async (req, res) => {
  try {
    const patchedTicket = await TicketService.patchTicket(req.params.id, req.body);
    res.status(200).json(patchedTicket);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteTicket = async (req, res) => {
  try {
    await TicketService.deleteTicket(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: "Билет не найден" });
  }
};

module.exports = {
  getAllTickets,
  createTicket,
  getTicketById,
  updateTicket,
  patchTicket,
  deleteTicket,
}; 