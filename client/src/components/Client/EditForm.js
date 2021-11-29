import React, { useState} from "react";
import { useSelector } from "react-redux";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useDispatch } from "react-redux";
import { editclient ,afficherclient} from "../../redux/actions/clientAction";
import { useEffect } from "react";


import "./clientForm.css";


function EditForm(props) {
    const [clientdata, setClientdata] = useState({
        NomSociete:"", firstname:"", lastname:"",PhoneNumber:"",email:"",Adresse:"",CodePostal:"",Ville:"",MatriculeFiscale:""
      });
    const dispatch = useDispatch();
    const Client = useSelector((state) => state.clientReducer);
    useEffect(() => {
      dispatch(afficherclient());
    }, [dispatch]);
    const client= props.currentId? Client.find((p)=>p._id===props.currentId):null;
     useEffect(() => {
        if (client) setClientdata(client)
      }, [client])
      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editclient(props.currentId,clientdata))
      };
      const handlechange = (e) => {
        setClientdata({ ...clientdata, [e.target.name]: e.target.value });
      };
    return (
      <div className="form_container">
      <div className="form_inner"> 
      <h2 style={{textAlign:"center",padding:"10px"}}> Modifier le Client</h2>

               <Grid item xs={12} sm={6}>
            <TextField
              required
              id="NomSociete"
              name="NomSociete"
              label="NomSociete"
              value={clientdata.NomSociete}
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
              value={clientdata.firstname}
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
              value={clientdata.lastname}
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
              value={clientdata.Adresse}
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
              value={clientdata.email}
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
              value={clientdata.PhoneNumber}
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
              value={clientdata.MatriculeFiscale}
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
              value={clientdata.Ville}
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
              value={clientdata.CodePostal}
              variant="standard"
              onChange={(e) => handlechange(e)}
            />
          </Grid>
          <Grid item xs={12}>
          <div className="control_form">
          <button className="button-10" onClick={(e)=>handleSubmit(e)}> submit</button>
          <button className="button-10" onClick={()=> props.setopenedit(false)}>Annuler</button>
          </div>
          </Grid>
        </div>
        </div>
    )
}

export default EditForm
