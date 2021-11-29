import React, { useState } from "react";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useDispatch } from "react-redux";
import { addfournisseur } from "../../redux/actions/fourniseurAction";
import "./FournisseurForm.css";

function FournisseurForm(props) {
  const [Fournisseurdata, setFournisseurdata] = useState({
    NomSociete: "",
    firstname: "",
    lastname: "",
    email: "",
    Adresse: "",
    PhoneNumber: null,
  });
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addfournisseur(Fournisseurdata));
    console.log(Fournisseurdata)
  };
  const handlechange = (e) => {
    setFournisseurdata({ ...Fournisseurdata, [e.target.name]: e.target.value });
  };
  return (
    <div className="form_container">
      <div className="form_inner">
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstname"
            label="First name"
            fullWidth
            variant="standard"
            onChange={(e) => handlechange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastname"
            label="Last name"
            fullWidth
            variant="standard"
            onChange={(e) => handlechange(e)}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Email"
            name="email"
            label="Email"
            fullWidth
            variant="standard"
            onChange={(e) => handlechange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="PhoneNumber"
            name="PhoneNumber"
            label="PhoneNumber"
            fullWidth
            variant="standard"
            onChange={(e) => handlechange(e)}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="NomSociete"
            name="NomSociete"
            label="NomSociete"
            fullWidth
            variant="standard"
            onChange={(e) => handlechange(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Adresse"
            name="Adresse"
            label="Addresse"
            fullWidth
            variant="standard"
            onChange={(e) => handlechange(e)}
          />
        </Grid>
        <Grid item xs={12}>
        <div className="control_form">
          <button className="button-10" onClick={(e) => onSubmit(e)}> submit</button>
          <button className="button-10" onClick={() => props.setopen(false)}>Annuler</button>
          </div>
        </Grid>
      </div>
    </div>
  );
}
export default FournisseurForm;
