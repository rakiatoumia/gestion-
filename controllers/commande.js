const Commande = require("../models/commandeSchema.js");

/****************/
exports.affichercommande = async (req, res) => {
  try {
    const commandes = await Commande.find({}).populate('produits.produit').populate('client')
    res.status(200).json({ commandes});
  } catch (error) {
    res.status(500).json({ message: `something went wrong ${error}` });
  }
};
exports.addcommande = async (req, res) => {
  try {
    const {client,reference,produits} = req.body;
    const newCommande = new Commande({ client,reference,produits});
    const commande = await newCommande.save();
    res.status(200).json({ commande });
  } catch (error) {
    res.status(500).json({ message: `something went wrong ${error}` });
  }
};
exports.deletecommande = async (req, res) => {
  try {
    await Commande.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({ message: `commande deleted ` });
   
  } catch (error) {
    res.status(500).json({ message: `something went wrong ${error}` });
  }
};

