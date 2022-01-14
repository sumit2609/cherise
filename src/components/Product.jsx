import React from 'react'
import Card from 'react-bootstrap/Card'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from 'react-bootstrap';
import { Products } from './Products';
import "./Product.css"
const Product = ({item}) => {
    return (
        <div>
            <Card style={{ width: '18rem',marginBottom:"10px"}}>
                <Card.Img variant="top" src={item.img1} />
                <Card.Body>
                    {/* <Card.Title></Card.Title> */}
                    <Card.Text style={{fontWeight:"700"}}>
                        {item.desc}
                    </Card.Text>
                    <Card.Text style={{fontWeight:"700"}} >
                        {item.price}
                    </Card.Text>

                    <button className='themeButton1' style={{padding:"5px 20px"}}>
                        <ShoppingCartIcon/>
                        Add to cart
                    </button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Product;
