const Fournisseur = require("../models/FournisseurSchema.js");

/****Afficher la liste des clients */

exports.afficherfournisseur = async (req, res) => {
  try {
    const fournisseurs = await Fournisseur.find({});
    res.status(200).json({ fournisseurs });
  } catch (error) {
    res.status(500).json({ message: `something went wrong ${error}` });
  }
};


/*******addclient controller *******/

exports.addfournisseur = async (req, res) => {
  try {
    const { NomSociete, firstname, lastname,email,Adresse,PhoneNumber } = req.body;
    const newFournisseur  = new Fournisseur ({ NomSociete, firstname, lastname,email,Adresse,PhoneNumber });
    const fournisseur  = await newFournisseur.save();
    res.status(200).json({ fournisseur  });
  } catch (error) {
    res.status(500).json({ message: `something went wrong ${error}` });
  }
};

/*******deleteclient controller *******/

exports.deletefournisseur = async (req, res) => {
  try {
    await Fournisseur.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({ message: `founisseur deleted ` });
  } catch (error) {
    res.status(500).json({ message: `something went wrong ${error}` });
  }
};

/*******editclient controller *******/

exports.editfournisseur = async (req, res) => {
  try {
    const updatedFounisseur = await Fournisseur.findByIdAndUpdate(
      { _id: req.params.id },
      { NomSociete: "rakia" }
    );
    res.status(200).json({ message: `fournisseur updated ` });

  } catch (error) {
    res.status(500).json({ message: `something went wrong ${error}` });
  }
};
