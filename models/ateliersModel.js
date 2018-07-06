var mongoose = require('mongoose');

// Schema de données de la collection ateliers
var ateliersSchema = new mongoose.Schema ({
    id_cuisinier: [{type: mongoose.Schema.ObjectId, ref: 'roles'}],
    titre : String,
    date : Date,
    duree : String,
    nb_place_disp : String,
    nb_place_res : String,
    prix : String,
    img : String
});

// module qui permet d'exporter le modèle du schéma de données de la collection ateliers 
module.exports = mongoose.model("ateliers", ateliersSchema);