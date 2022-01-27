import React, { useEffect, useState } from 'react'
import {products} from "../data";
import Product from "./Product"
import "./Products.css"

export const Products = (props) => {
    // console.log(props.prod)

    const [prod,setprod] = useState(props.prod);

    useEffect(()=>{
        setprod(props.prod)
    },[props])


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
