import { Mail, Phone } from '@mui/icons-material'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from "../Assets/cherise_logo.png"
import img1 from "../Assets/footer/ayurveda_fiiterLogo.png"
import img2 from "../Assets/footer/Cherise-Global-Bean-Lovers-Footer-Logo11.jpg"
import img3 from "../Assets/footer/Cherise-Global-Iceboosters-Footer-Logo11.jpg"
import img4 from "../Assets/footer/specialiteas_fiiterLogo.jpg"
import img5 from "../Assets/footer/tapri_fiiterLogo.jpg"

import "./Footer.css"
export const Footer = () => {
    return (

        <div id="footerContainer">
            <div className="Container">
                <div style={{flex:"1"}}>
                    <div className="c1">
                        <img 
                            style={{    maxWidth: "130px",marginBottom: "15px"}} 
                            src={Logo} alt="logo" 
                        />
                        <h5 className='c1h5' style={{fontWeight:"700"}} >Address</h5>
                        <p className='c1p'>
                            Cherise (India) Private Limited<br/>
                            201, Parijat, North South Rd 10,<br/>
                            Juhu, Vile Parle West, Mumbai, 400049<br/>
                            <br/>
                            <b>CIN:</b>
                            U74999MH2018PTC317161
                        </p>
                        <p className='c1p'> 
                            <Mail/>
                            &nbsp;&nbsp;connect@cheriseglobal.com
                        </p>
                        <p className='c1p'> 
                            <Phone/>
                            &nbsp;&nbsp;+91-73739-00500
                        </p>
                    </div>
                </div>
                <div style={{flex:"1"}}>
                    <div className='c2'>
                        <h5 className='c1h5' style={{fontWeight:"700"}} >Brands</h5>
                        <div className="mefooterLogo">
                            <a>
                                <img src={img1} style={{border:"1px solid #efefef"}} alt="img"/>
                            </a>
                            <a>
                                <img src={img2} style={{border:"1px solid #efefef"}} alt="img"/>
                            </a>
                            <a>
                                <img src={img3} style={{border:"1px solid #efefef"}} alt="img"/>
                            </a>
                            <br/>
                            <a>
                                <img src={img4} style={{border:"1px solid #efefef"}} alt="img"/>
                            </a>
                            <a>
                                <img src={img5} style={{border:"1px solid #efefef"}} alt="img"/>
                            </a>
                            
                        </div>
                    </div>
                    
                </div>
                <div style={{flex:"1"}}>
                    <div className="c3" style={{paddingLeft:"50px"}}>
                        <h5 className='c1h5' style={{fontWeight:"700"}}>Important Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/" style={{textDecoration:"none",color:"#000"}}>
                                    Home
                                </Link>   
                            </li>
                            <li>
                                <Link to="/about" style={{textDecoration:"none",color:"#000"}}>
                                    About
                                </Link>
                            </li>
                            <li   >
                                <Link to="/explore" style={{textDecoration:"none",color:"#000"}}>
                                    Explore
                                </Link> 
                            </li>
                            <li>
                                <Link to="/blogs" style={{textDecoration:"none",color:"#000"}} >
                                    Blogs
                                </Link>
                            </li>
                            <li>Disclamer</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>

                </div>
                <div style={{flex:"1"}}>
                <div className="c3" style={{paddingLeft:"50px"}}>
                        <h5 className='c1h5' style={{fontWeight:"700"}}>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li>T & C</li>
                            <li>Return and Refund</li>
                            <li>Track Order</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="row">
                <div style={{position: "relative",
                    minHeight: "1px",
                    paddingRight: "15px",
                    paddingLeft: "15px"}} 
                >
                    <hr className="socialHr" />
                </div>
            </div>

            <div className="socialFooter">
                <div className='text-center' >
                    <div className="flexDiv" style={{justifyContent:"center"}} >
                        <a target="_blank" href="https://www.instagram.com/cheriseglobal/" >
                            <img src="	https://shop.cheriseglobal.com/public/img/insta.png" />
                        </a>
                        &nbsp;&nbsp;
                        <a target="_blank" href="https://www.facebook.com/cheriseglobal">
                            <img src="https://shop.cheriseglobal.com/public/img/fb.png" />
                        </a>
                        &nbsp;&nbsp;
                        <a target="_blank" href="https://www.linkedin.com/company/cherise-tapri/" >
                            <img src="https://shop.cheriseglobal.com/public/img/link.png" />
                        </a>
                        &nbsp;&nbsp;
                        <a target="_blank" href="https://twitter.com/cheriseglobal?s=09" >
                            <img src="https://shop.cheriseglobal.com/public/img/twi.png" />
                        </a>
                        &nbsp;&nbsp;
                        <a target="_blank" href="https://in.pinterest.com/cheriseglobal/_created/" >
                            <img src="https://shop.cheriseglobal.com/public/img/pin1.png" />
                        </a>
                        &nbsp;&nbsp;
                        <a target="_blank" href="https://www.youtube.com/channel/UC-3QlbOMKDlXMDXtxHCjXhw" >
                            <img src="	https://shop.cheriseglobal.com/public/img/yt.png" />
                        </a>
                    </div>
                </div>
            </div>
            
            <div className='text-center row' style={{background:"#096B61"}} >
                <p
                    style={{textAlign:"center", color:"white"}}
                    className='mtb20 font12 mfont12'
                >
                    © 2022 Copyright By Cherise (India) Pvt. Ltd.
                </p>
            </div>
        </div>
        
    
    )
}
