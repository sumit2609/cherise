import React from 'react'
import "./Blogs.css"
import { Footer } from '../components/Footer';
import { Navbars } from '../components/Navbar';
import { Followfooter } from '../components/Followfooter';
import { Card } from 'react-bootstrap';

export const Blogs = () => {
    return (
        <div>
            <Navbars/>
            <div className='mt50'>
                <div>
                    <div className='text-center'>
                        <h1 className='colorGreen fontPhilosopher' >
                            CHERISE SHOP
                        </h1>
                        <p className='colorGreen fontPhilosopher' style={{fontWeight:"400"}}> 
                        Beverages formulated by Farmers to provide you with the BEST TASTE and QUALITY!
                        </p>
                    </div>
                </div>
            </div>
            <div className="row mtb30">
                <div className='flexDiv alignCenter' style={{justifyContent:"center"}}>
                    <div className='colorGreen fontPhilosopher'  style={{cursor:"pointer",fontWeight:"400"}}>
                        View All
                    </div>
                    <hr className='shopHr' />
                    <div className='colorGreen fontPhilosopher' style={{cursor:"pointer",fontWeight:"400"}}>
                        Special Tea
                    </div>
                    <hr className='shopHr' />
                    <div className='colorGreen fontPhilosopher' style={{cursor:"pointer",fontWeight:"400"}}>
                        Tea
                    </div>
                </div>
            </div>


            <div className='blogcards' >
                <div style={{display:"flex",flex:"2",justifyContent:"space-evenly"}}>
                <Card style={{ width: '25rem',padding:"20px",boxShadow: "0px 0px 23px -13px rgb(0 0 0 / 30%)",border:"none" }}>
                    <Card.Img variant="top" src="https://cheriseglobal.com/shop/public/uploads/blogs/CHERISE6127b9a132a3c.jpg" />
                    <Card.Body>
                        <Card.Title>
                            <a style={{textDecoration:"none"}} href="https://blogs.cheriseglobal.com/blog/fresh-milk-based-tea-coffee-machine-vs-premix-based-tea-coffee-machine-which-is-better">
                                <p className='p mb0' >
                                    <span>Tea</span>
                                </p>
                                <h2 className="mb0 font18 colorGreen fontPhilosopher" style={{lineHeight:"1.5"}}>
                                    <b className='font18'>
                                        Fresh Milk-Based Tea Coffee Machine Vs. Premix-Based Tea Coffee Machine – Which is Better?
                                    </b>
                                </h2>
                            </a>
                        </Card.Title>
                        <Card.Text>
                            <p className='mtb10'>
                                <a style={{textDecoration:"none",color: "#333"}} href="https://blogs.cheriseglobal.com/blog/fresh-milk-based-tea-coffee-machine-vs-premix-based-tea-coffee-machine-which-is-better">
                                You are constantly working in your office since morning and suddenly your senses start craving for a hot cuppa. Remembering your maa ki hath ki chai,........
                                </a>
                                <a style={{textDecoration:"none",color: "#333"}} href="https://blogs.cheriseglobal.com/blog/fresh-milk-based-tea-coffee-machine-vs-premix-based-tea-coffee-machine-which-is-better">
                                <u>Read More</u>
                                </a>
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '25rem',padding:"20px",boxShadow: "0px 0px 23px -13px rgb(0 0 0 / 30%)",border:"none"  }}>
                    <Card.Img variant="top" src="	https://cheriseglobal.com/shop/public/uploads/blogs/CHERISE6127b98b9e05c.jpg" />
                    <Card.Body>
                        <Card.Title>
                            <a style={{textDecoration:"none"}} href="https://blogs.cheriseglobal.com/blog/fresh-milk-based-tea-coffee-machine-vs-premix-based-tea-coffee-machine-which-is-better">
                                <p className='p mb0' >
                                    <span>Tea</span>
                                </p>
                                <h2 className="mb0 font18 colorGreen fontPhilosopher" style={{lineHeight:"1.5"}}>
                                    <b className='font18'>
                                    6 Best Ayurvedic Immunity Booster Ingredients for Teas & Kadhas
                                    </b>
                                </h2>
                            </a>
                        </Card.Title>
                        <Card.Text>
                            <p className='mtb10'>
                                <a style={{textDecoration:"none",color: "#333"}} href="https://blogs.cheriseglobal.com/blog/fresh-milk-based-tea-coffee-machine-vs-premix-based-tea-coffee-machine-which-is-better">
                                Come monsoons or winters and many of us are bothered by those sniffles or congested throat. Those unwelcoming signs of seasonal changes take away our.......
                                </a>
                                <a style={{textDecoration:"none",color: "#333"}} href="https://blogs.cheriseglobal.com/blog/fresh-milk-based-tea-coffee-machine-vs-premix-based-tea-coffee-machine-which-is-better">
                                <u>Read More</u>
                                </a>
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>
                <div style={{flex:"1"}}>

                </div>
            </div>

            <div style={{display:"flex",justifyContent:"center",paddingBottom:"30px"}}>
                <div className="page themeButton1" style={{display:"flex",alignItems:"center",justifyContent:"center",borderColor:"#EEEEEE",borderRadius:"0px",width:"50px",padding:"0",paddingTop:"10px",paddingBottom:"10px"}}>
                    1
                </div>
            </div>

            <Followfooter/>
            <Footer/>
        </div>
    )
}
