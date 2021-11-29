const Client = require("../models/ClientSchema.js");

/****Afficher la liste des clients */
exports.afficherclient = async (req, res) => {
  try {
    const clients = await Client.find({});
    res.status(200).json({ clients });
  } catch (error) {
    res.status(500).json({ message: `something went wrong ${error}` });
  }
};

/*******addclient controller *******/
exports.addclient = async (req, res) => {
  try {
    const {
      NomSociete,
      firstname,
      lastname,
      PhoneNumber,
      email,
      Adresse,
      CodePostal,
      Ville,
      MatriculeFiscale,
    } = req.body;
    const newClient = new Client({
      NomSociete,
      firstname,
      lastname,
      PhoneNumber,
      email,
      Adresse,
      CodePostal,
      Ville,
      MatriculeFiscale,
    });
    const client = await newClient.save();
    console.log(client);
    res.status(200).json({ client });
  } catch (error) {
    res.status(500).json({ message: `something went wrong ${error}` });
  }
};
/*******deleteclient controller *******/

exports.deleteclient = async (req, res) => {
  try {
    await Client.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({ message: `client deleted ` });
  } catch (error) {
    res.status(500).json({ message: `something went wrong ${error}` });
  }
};

/*******editclient controller *******/
exports.editclient = async (req, res) => {
  try {
    const {
      NomSociete,
      firstname,
      lastname,
      PhoneNumber,
      email,
      Adresse,
      CodePostal,
      Ville,
      MatriculeFiscale,
    } = req.body;
    const updatedClient = await Client.findByIdAndUpdate(
      { _id: req.params.id },
      {
        NomSociete,
        firstname,
        lastname,
        PhoneNumber,
        email,
        Adresse,
        CodePostal,
        Ville,
        MatriculeFiscale,
      },
      { new: true }
    );
    res.json(updatedClient);
  } catch (error) {
    res.status(500).json({ message: `something went wrong ${error}` });
  }
};
