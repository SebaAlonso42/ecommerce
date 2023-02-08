import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {  yellow } from '@mui/material/colors';

const CartWidget=()=>{
    return(
        <div className="cart">
            <ShoppingCartIcon fontSize="large" sx={{ color: yellow[500] }}/>
            <span className="item__total">0</span>
          </div>
    )
}

export default CartWidget;