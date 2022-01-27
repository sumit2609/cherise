import React from 'react'
import Card from 'react-bootstrap/Card'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { Button } from 'react-bootstrap';
// import { Products } from './Products';
import "./Product.css"
import { Link } from 'react-router-dom';
const Product = ({item}) => {
    return (
        <div>
            <Card style={{ width: '18rem',marginBottom:"10px"}}>
                <Link to={`/product/${item.id}`}>
                    <Card.Img variant="top" src={item.img1} />
                </Link>
                <Card.Body>
                    <Link to={`/product/${item.id}`} style={{textDecoration:"none", color:"black"}}>
                        <Card.Text style={{fontWeight:"700"}}>
                            {item.desc}
                        </Card.Text>
                        <Card.Text style={{fontWeight:"700"}} >
                            {item.price}
                        </Card.Text>
                    </Link>
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
