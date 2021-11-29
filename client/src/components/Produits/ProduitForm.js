import React, { useState } from "react";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addproduit} from "../../redux/actions/produitAction";
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import "./Produit.css";

function ProduitForm(props) {
  const [Produitdata, setProduitdata] = useState({
    reference: "",
    description: "",
    designation: "",
    PrixHT: null,
    QuantiteStock: null,
    StockMin: null,
    TVA: null,
    QuantiteEntree:null,
    QuantiteSortie:null,
    QuantiteInitiale:null,
  });

  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addproduit(Produitdata));
  };
  const handlechange = (e) => {
    setProduitdata({ ...Produitdata, [e.target.name]: e.target.value });
  };

  return (
    <div className="form_container">
      <div className="form_inner">
      <h2 style={{textAlign:"center",padding:"10px"}}> Ajouter un Produit</h2>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="reference"
            name="reference"
            label="reference"
            fullWidth
            variant="standard"
            onChange={(e) => handlechange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="designation"
            name="designation"
            label="designation"
            fullWidth
            variant="standard"
            onChange={(e) => handlechange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="description"
            name="description"
            label="description"
            fullWidth
            variant="standard"
            onChange={(e) => handlechange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="QuantiteInitiale"
            name="QuantiteInitiale"
            label="QuantiteInitiale"
            fullWidth
            variant="standard"
            onChange={(e) => handlechange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="StockMin"
            name="StockMin"
            label="StockMin"
            fullWidth
            variant="standard"
            onChange={(e) => handlechange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="PrixHT"
            name="PrixHT"
            label="PrixHT"
            fullWidth
            variant="standard"
            onChange={(e) => handlechange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="TVA"
            name="TVA"
            label="TVA"
            fullWidth
            variant="standard"
            onChange={(e) => handlechange(e)}
          />
        </Grid>
        
        <Grid item xs={12}>
          <div className="control_form">
          <button className="button-10"onClick={(e) =>onSubmit(e)}>Sauvegarder</button>
          <button className="button-10"onClick={()=>props.setopen(false)}>Annuler</button>
          </div>
        </Grid>
      </div>
    </div>
  ) 
}

export default ProduitForm;
