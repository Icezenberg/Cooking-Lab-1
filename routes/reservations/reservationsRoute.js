var express = require ('express');
var router = express.Router();

var reservations = require("../../controllers/reservationsController")



//Route permettant de valider l'inscription à un atelier
router.get('/save/:id', reservations.save);

 
// module permettant d'exporter router
module.exports = router;