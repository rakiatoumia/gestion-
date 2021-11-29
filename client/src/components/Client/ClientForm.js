import React, { useState } from "react";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useDispatch } from "react-redux";
import { addclient } from "../../redux/actions/clientAction";
import "./clientForm.css";

function ClientForm(props) {
  const [clientdata, setClientdata] = useState({
    NomSociete:"", firstname:"", lastname:"",PhoneNumber:"",email:"",Adresse:"",CodePostal:"",Ville:"",MatriculeFiscale:""
  });
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addclient(clientdata));
  };
  const handlechange = (e) => {
    setClientdata({ ...clientdata, [e.target.name]: e.target.value });
  };
  
  return(
    <div className="form_container">
      <div className="form_inner">       
      <h2 style={{textAlign:"center",padding:"10px"}}> Ajouter Un nouveau Client</h2>

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
            id="Adresse"
            name="Adresse"
            label="Adresse"
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
            id="MatriculeFiscale"
            name="MatriculeFiscale"
            label="MatriculeFiscale"
            fullWidth
            variant="standard"
            onChange={(e) => handlechange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="ville"
            name="Ville"
            label="ville"
            fullWidth
            variant="standard"
            onChange={(e) => handlechange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="CodePostal"
            label="Zip /Postal code"
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

export default ClientForm;
