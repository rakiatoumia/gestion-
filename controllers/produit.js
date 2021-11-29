const Produit = require("../models/ProduitSchema.js");

exports.afficherproduit = async (req, res) => {
  try {
    const produits = await Produit.find({});
    res.status(200).json({ produits });
  } catch (error) {
    res.status(500).json({ message: `something went wrong ${error}` });
  }
};
/*******addproduit controller *******/

exports.addproduit = async (req, res) => {
  try {
    const {
      reference,
      description,
      designation,
      PrixHT,
      QuantiteStock,
      StockMin,
      TVA,
      QuantiteEntree,
      QuantiteSortie,
      QuantiteInitiale,
    } = req.body;
    const newProduit = new Produit({
      reference,
      description,
      designation,
      PrixHT,
      QuantiteStock,
      StockMin,
      TVA,
      QuantiteEntree,
      QuantiteSortie,
      QuantiteInitiale,
    });
    const produit = await newProduit.save();
    res.status(200).json({ produit });
  } catch (error) {
    res.status(500).json({ message: `something went wrong ${error}` });
  }
};
/*******delete produit controller *******/

exports.deleteproduit = async (req, res) => {
  try {
    await Produit.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({ message: `produit deleted ` });
  } catch (error) {
    res.status(500).json({ message: `something went wrong ${error}` });
  }
};

/*******edit produit controller *******/
exports.editproduit = async (req, res) => {
  try {
    const {
      reference,
      description,
      designation,
      PrixHT,
      QuantiteStock,
      StockMin,
      TVA,
      QuantiteEntree,
      QuantiteSortie,
      QuantiteInitiale,
    } = req.body;
    const updatedProduit = await Produit.findByIdAndUpdate(
      { _id: req.params.id},
      {
      reference,
      description,
      designation,
      PrixHT,
      QuantiteStock,
      StockMin,
      TVA,
      QuantiteEntree,
      QuantiteSortie,
      QuantiteInitiale,
      },
      { new: true }
    );
    res.json(updatedProduit);
  } catch (error) {
    res.status(500).json({ message: `something went wrong ${error}` });
  }
};
