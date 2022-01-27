import React, { useEffect, useState } from 'react'
import { Carousal } from '../components/Carousal';
import { Filter } from '../components/Filter';
import { Footer } from '../components/Footer';
import { Navbars } from '../components/Navbar';
import { PaymentFooter } from '../components/PaymentFooter';
import { Products } from '../components/Products';
import "./Home.css";

import {products} from "../data";

export const Home = () => {
    const [brand,setbrand] = useState('all');
    const [category,setcategory] = useState('all');
    const [prod,setprod] = useState(products);

    const filterChange = (e) =>{
        setbrand(e.brand)
        setcategory(e.category)
    }

    useEffect(()=>{
        console.log("brand change")
        const filterbrand = () =>{
            if(brand != 'all'){
                const updateprod = products.filter((curr) => {
                    return curr.brand === brand;
                });
                // console.log("hiii")
                console.log(updateprod)
                setprod(updateprod);
            }else{
                setprod(products);
            }
            // console.log("hii")
        }
        filterbrand()
    },[brand])

    useEffect(()=>{
        console.log("category change")
        const filtercategory = () =>{
            if(category!='all'){
                const updateprod = prod.filter((curr) => {
                    return curr.cate === category;
                });
                setprod(updateprod);
            }
        }
        filtercategory();
    },[category])



    return (
        <div>
            <Navbars/>
            <Carousal/>
            <div className='mt50'>
                <div>
                    <div className='text-center'>
                        <h1 className='colorGreen fontPhilosopher' >
                            CHERISE SHOP
                        </h1>
                        <p>
                        We produce an array of high-quality beverages that are healthy, farm-fresh, and authentic in taste.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row mtb30">
                <div className='flexDiv alignCenter' style={{justifyContent:"center"}}>
                    <div className='categorySearchme' style={{cursor:"pointer"}}>
                        <img src="https://shop.cheriseglobal.com/public/img/allproducts.png" alt="image1" />
                    </div>
                    <hr className='shopHr' />
                    <div  style={{cursor:"pointer"}}>
                        <img src="	https://shop.cheriseglobal.com/public/img/allsp.png" alt="image2" />
                    </div>
                    <hr className='shopHr' />
                    <div  style={{cursor:"pointer"}}>
                        <img src="	https://shop.cheriseglobal.com/public/img/alltp.png" alt="image3" />
                    </div>
                    <hr className='shopHr' />
                    <div  style={{cursor:"pointer"}}>
                        <img src="	https://shop.cheriseglobal.com/public/img/allay.png" alt="image4" />
                    </div>
                </div>
            </div>
            <div className='ProductFilter' >
                <div style={{flex: 1}}>
                    <Filter onChange={filterChange} />
                </div>
                <div style={{flex: 5}}>
                    <Products 
                    //brand={brand} category={category} 
                        prod={prod}
                    />
                </div>
            </div>

            <div className='mtb50'>
                <div>
                    <div className='text-center'>
                        <h1 className='colorGreen fontPhilosopher' >
                            COMBOS & MORE
                        </h1>
                        <p>
                        Beverages formulated by Farmers to provide you with the BEST TASTE and QUALITY!
                        </p>
                    </div>
                </div>
            </div>
            <PaymentFooter/>
            <Footer/>
        </div>
    )
}
