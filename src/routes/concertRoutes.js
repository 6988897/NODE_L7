const express = require("express");
const router = express.Router();
const concertController = require("../controllers/concertController.js");

router
  .route("/")
  .get(concertController.getAllConcerts)    
  .post(concertController.createConcert);   

router
  .route("/:id")
  .get(concertController.getConcertById)   
  .put(concertController.updateConcert)     
  .patch(concertController.patchConcert)    
  .delete(concertController.deleteConcert); 

module.exports = router;