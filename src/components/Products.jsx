import React, { useEffect, useState } from 'react'
import {products} from "../data";
import Product from "./Product"
import "./Products.css"

export const Products = () => {
    const [prod,setprod] = useState(products);

    // const [fil,setfil] = useState(ayurvedic);
    // const fil = 'ayurvedic'

    const filterItem = (ayurvedic) =>{
        const updateprod = prod.filter((curr) => {
            return curr.brand === 'ayurvedic';
        });
        // console.log(fil)
        console.log(updateprod.length);
        setprod(updateprod);
    }

    useEffect(() => {
        filterItem();
    },[])



    return (
        <div className='items'>
            {
                prod.map((item)=>(
                    <Product item={item} key={item.id}/>
                ))
            }
            
        </div>
    )
}
