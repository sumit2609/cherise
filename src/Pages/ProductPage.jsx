import React from 'react';
import { useParams } from 'react-router-dom';
import {Row,Col,Image,ListGroup,Card,Button} from 'react-bootstrap'
import { products } from '../data';
import Rating from '../components/Rating'
import "./ProductPage.css";

const ProductPage = ({match}) => {
    const { id } = useParams();
    const product = products.find(p=>p.id === parseInt(id))
    console.log(product)
  return (
    <>
        <Row className="my-3">
            <Col md={6} style={{display:'flex',alignItems:"center",justifyContent:"center"}}>
              <div className='py-4 px-4 productScreen'>
                <Image src={product.productscreenimg} />
              </div>
            </Col>
            <Col md={6}>
            <ListGroup className='mx-5 px-5' variant='flush'>
              <ListGroup.Item>
                <h3 className='fontPhilosopher colorGreen' style={{fontWeight:"500"}} >{product.productscreenheading}</h3>
                <div className='my-3' >
                  <a className='buttonStyle' style={{textDecoration:"none",color:"#fff"}} >
                    {product.Productcate}
                  </a>
                </div>
                <Rating 
                  value={product.rating} 
                  text={` ${product.numReviews} reviews`} 
                />
              </ListGroup.Item>
              <ListGroup.Item className='fontPhilosopher colorGreen font24'>
                  {product.price}
              </ListGroup.Item>
              <ListGroup.Item>
                  Description: 
              </ListGroup.Item>
            </ListGroup>
            </Col>
        </Row>
    </>

  )
};

export default ProductPage;
