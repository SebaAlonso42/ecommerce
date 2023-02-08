import React from "react";
import { yellow } from '@mui/material/colors';
import PersonIcon from '@mui/icons-material/Person';

 const ItemListContainer=(props)=>{
    return(
        <div>
            <PersonIcon className="avatar" sx={{ color: yellow[500] }} fontSize="large"/>
   
            <h1  style={{color:"yellow", fontSize:"16px", paddingRight:"10px"}}>Bienvenida {props.greeting} </h1>
        </div>
    )
}

export default ItemListContainer;