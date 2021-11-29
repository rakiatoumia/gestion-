import React, { useState,useEffect } from "react";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { editproduit,afficherproduit} from "../../redux/actions/produitAction";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./Produit.css";

function EditForm(props) {
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
  const Produit = useSelector((state) => state.produitReducer);
  useEffect(() => {
    dispatch(afficherproduit());
  }, [dispatch]);
  const produit= props.currentId? Produit.find((p)=>p._id===props.currentId):null;
   useEffect(() => {
      if (produit) setProduitdata(produit)
    }, [produit])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(Produitdata);
        dispatch(editproduit(props.currentId,Produitdata))
      };
  const handlechange = (e) => {
    setProduitdata({ ...Produitdata, [e.target.name]: e.target.value });
  };
  return (
    <div className="form_container">
      <div className="form_inner">
      <h2 style={{textAlign:"center",padding:"10px"}}> Modifier le Produit</h2>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="reference"
            name="reference"
            label="reference"
            fullWidth
            value={Produitdata.reference}
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
            value={Produitdata.designation}
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
            value={Produitdata.description}
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
            value={Produitdata.QuantiteInitiale}
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
            value={Produitdata.StockMin}
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
            value={Produitdata.PrixHT}
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
            value={Produitdata.TVA}
            variant="standard"
            onChange={(e) => handlechange(e)}
          />
        </Grid>
        
        <Grid item xs={12}>
        <div className="control_form">
          <button className="button-10" onClick={(e) =>handleSubmit(e)}> submit</button>
          <button className="button-10" onClick={()=>props.setopenedit(false)}>Annuler</button>
          </div>
        </Grid>
      </div>
    </div>
  ) 
}

export default EditForm;


