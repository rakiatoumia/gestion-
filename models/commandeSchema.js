const mongoose = require("mongoose");
const commandeSchema = new mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "client",
  },
  reference: {
    type: String,
  },
  date: { type: Date },
  produits: [
    {
      produit: { type: mongoose.Schema.Types.ObjectId, ref: "Produits" },
      quantite: Number,
    },
  ],
});
module.exports = mongoose.model("Commande", commandeSchema);
