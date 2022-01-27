import React, { useEffect, useState } from 'react'
import "./Filter.css"

export const Filter = (props) => {

    const [brand,setbrand] = useState('all')
    const [category,setcategory] = useState('all')
    
    const handleChangebrand = (e) =>{
        setbrand(e.target.value)
    }
    const handleChangeValue=(e) =>{
        setcategory(e.target.value)
    }
    const reset = () =>{
        console.log("reset")
        setbrand('all')
        setcategory('all')
    }

    useEffect(()=>{
        console.log("hii")
        
    },[brand,category])

    useEffect(()=>{
        // console.log("hii")
        // console.log("brand")
        // console.log(brand)
        // console.log(category)
        props.onChange({brand,category})
    },[brand,category])

 
    return (
        <div className='Filter'>
            <div className='mtb20'>
                <div className='filterSection'>
                    <p className='p mb0'>
                        <img style={{marginRight:"10px"}} src="https://shop.cheriseglobal.com/public/img/filter.png" alt="img" />
                        <b>Filters</b>
                    </p>
                    <p onClick={reset} className='p colorGreen mb0' style={{cursor:"pointer"}} >
                        Reset All
                    </p>
                </div>
                <div className='filterSection1'>
                    <h3 className='mtb10 font16 fontPhilosopher' >
                        <b>Shop by Brand</b>
                    </h3>
                    <div class="radio-item">
                        <input type="radio" id="radio-item-all" name="all" value="all" onChange={handleChangebrand}/>
                        <label for="radio-item-all">All</label>
                    </div>

                    <div class="radio-item">
                        <input type="radio" id="radio-item-tapri" name="all" value="tapri" onChange={handleChangebrand}/>
                        <label for="radio-item-tapri">Tapri</label>
                    </div>

                    <div class="radio-item">
                        <input type="radio" id="radio-item-Ayurvedic" name="all" value="ayurvedic" onChange={handleChangebrand}/>
                        <label for="radio-item-Ayurvedic">Ayurvedic</label>
                    </div>

                    <div class="radio-item">
                        <input type="radio" id="radio-item-specialities" name="all" value="specialities" onChange={handleChangebrand}/>
                        <label for="radio-item-specialities">Specialities</label>
                    </div>
                    
                </div>

                <div className='filterSection1'>
                    <h3 className='mtb10 font16 fontPhilosopher' >
                        <b>Search by Category</b>
                    </h3>
                    <div class="radio-item">
                        <input type="radio" id="radio-item-Tea Premix" name="category" value="teapremix" onChange={handleChangeValue}/>
                        <label for="radio-item-Tea Premix">Tea Premix</label>
                    </div>

                    <div class="radio-item">
                        <input type="radio" id="radio-item-Coffee Premix" name="category" value="coffeepremix" onChange={handleChangeValue}/>
                        <label for="radio-item-Coffee Premix">Coffee Premix</label>
                    </div>

                    <div class="radio-item">
                        <input type="radio" id="radio-item-Tomato Soup Premix" name="category" value="tamatosoup" onChange={handleChangeValue}/>
                        <label for="radio-item-Tomato Soup Premix">Tomato Soup Premix</label>
                    </div>

                    <div class="radio-item">
                        <input type="radio" id="radio-item-Milk Premix" name="category" value="milkpremix" onChange={handleChangeValue}/>
                        <label for="radio-item-Milk Premix">Milk Premix</label>
                    </div>

                    <div class="radio-item">
                        <input type="radio" id="radio-item-Green Tea" name="category" value="greentea" onChange={handleChangeValue}/>
                        <label for="radio-item-Green Tea">Green Tea</label>
                    </div>

                    <div class="radio-item">
                        <input type="radio" id="radio-item-Black Tea" name="category" value="blacktea" onChange={handleChangeValue}/>
                        <label for="radio-item-Black Tea">Black Tea</label>
                    </div>

                    <div class="radio-item">
                        <input type="radio" id="radio-item-Immunity" name="category" value="ayurvedicimmunity" onChange={handleChangeValue}/>
                        <label for="radio-item-Immunity">Ayurvedic Immunity Boosters</label>
                    </div>
                    
                </div>  

                <div className='filterSection1'>
                    <h3 className='mtb10 font16 fontPhilosopher' >
                        <b>Buy more, save more</b>
                    </h3>
                    <div class="radio-item">
                        <input type="radio" id="radio-item-Multi-packs" name="ritem" value="14"/>
                        <label for="radio-item-Multi-packs">Multi-packs</label>
                    </div>   
                    <div class="radio-item">
                        <input type="radio" id="radio-item-combos" name="ritem" value="14"/>
                        <label for="radio-item-combos">Combos</label>
                    </div>  
                </div>    

                <div className='filterSection1'>
                    <h3 className='mtb10 font16 fontPhilosopher' >
                        <b>1 kg Pack</b>
                    </h3>
                    <div class="radio-item">
                        <input type="radio" id="radio-item-1kg Pouch" name="ritem" value="14"/>
                        <label for="radio-item-1kg Pouch">1kg Pouch</label>
                    </div>    
                </div>  

            </div>
        </div>
    )
}
