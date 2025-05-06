const express = require("express");
const router = express.Router();
const ticketController = require("../controllers/ticketController.js");

router
  .route("/")
  .get(ticketController.getAllTickets)   
  .post(ticketController.createTicket);  

router
  .route("/:id")
  .get(ticketController.getTicketById) 
  .put(ticketController.updateTicket)     
  .patch(ticketController.patchTicket)    
  .delete(ticketController.deleteTicket); 

module.exports = router;