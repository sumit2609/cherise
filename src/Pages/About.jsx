import React from 'react'
import { Button, Card, Carousel, Container, Row } from 'react-bootstrap';
import { PaymentFooter } from '../components/PaymentFooter';
import { Footer } from '../components/Footer';
import { Navbars } from '../components/Navbar';
import "./About.css"

export const About = () => {

    return (
        <div>
            <Navbars/>
            <Carousel controls={false} interval={3000} >
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://shop.cheriseglobal.com/public/img/banner3.jpg"
                  alt="First slide"
                />
                {/* <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://shop.cheriseglobal.com/public/img/banner2tapri.jpg"
                  alt="Second slide"
                />

                {/* <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://shop.cheriseglobal.com/public/img/aboutbanner.jpg"
                  alt="Third slide"
                />

                {/* <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption> */}
              </Carousel.Item>
            </Carousel>
            <div className="flexDiv" style={{padding:"20px",alignItems:"center",justifyContent:"space-between"}}>
              <div className='mtb30 flexDiv' > 
                  <div style={{flex:"1"}}></div>
                  <div style={{flex:"2"}}>
                    <h3 style={{lineHeight:"1.3",fontWeight: "400",marginRight:"10px"}} >
                      Experience healthy&nbsp;
                      <span className="colorGreen fontPhilosopher" >Farm-Fresh Beverages</span>
                        &nbsp;along-with One of India's most&nbsp;
                      <span className="colorGreen fontPhilosopher">advanced and hygienic</span>
                        &nbsp;IoT based, fully contact-less,&nbsp;
                      <span className="colorGreen fontPhilosopher">smart vending eco-system!</span>
                    </h3>
                  </div>
                  <div style={{flex:"2"}}>
                    <img src="https://shop.cheriseglobal.com/public/img/short_banner.jpg" alt="image" />
                  </div>
                  <div style={{flex:"1"}}></div>
              </div>
            </div>

            <div className='about' >
                <div style={{display:"flex",alignItems:"center",justifyContent:"center"}} >
                <iframe className='iframe' src="https://www.youtube.com/embed/Kju3Jt8zQlw" title="YouTube video player"></iframe>
                </div>
            </div>

            <div className="about2">
              <div className="jumbotron jumbotron-fluid" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginLeft:"100px",marginRight:"100px"}} >
                  <div style={{flex:"1",padding:"20px"}}>
                    <img style={{width: "100%"}} src="https://shop.cheriseglobal.com/public/img/Logo_cherise.png" alt="cherise" />
                  </div>
                  <div style={{flex:"3"}}>
                    <h2 className='colorGreen fontPhilosopher' >A TRUE FARM TO CUP ECOSYSTEM</h2>
                    <p className="p text-justify" >
                      A global leader in Orthodox tea manufacturing & distribution, M K Tea Group strives to be the epitome of quality tea products. A vision of Mr. Mukundray K. Shah, the group was founded soon after India gained Independence: a time when India was just beginning to see an industrial and commercial revolution.
                      <br/>
                      <br/>
                      A global leader in Orthodox tea manufacturing & distribution, M K Tea Group strives to be the epitome of quality tea products. A vision of Mr. Mukundray K. Shah, the group was founded soon after India gained Independence: a time when India was just beginning to see an industrial and commercial revolution.
                      <br/>
                      <br/>
                      Such precision in a yet-to-be organized industry was new and unique. This enabled M K Tea Group to become one of the pioneering companies in the tea-manufacturing sector of India.
                      <br/>
                      <br/>
                      Today it is a brand that is dedicated to creating quality tea products- products that are scientifically engineered with passion, commitment and authenticity.
                    </p>
                  </div>
                </div>

                <div style={{marginTop:"30px",display:"flex",alignItems:"center",justifyContent:"center",marginLeft:"100px",marginRight:"100px"}} >
                  <div style={{flex:"3",padding:"20px"}}>
                    <h2 className='colorGreen fontPhilosopher' >OUR BRANDS</h2>
                    <p className='text-justify p' >
                      A global leader in Orthodox tea manufacturing & distribution, M K Tea Group strives to be the epitome of quality tea products. A vision of Mr. Mukundray K. Shah, the group was founded soon after India gained Independence: a time when India was just beginning to see an industrial and commercial revolution.
                    </p>
                    <div style={{display:"flex"}}>
                      <div style={{flex:"4"}} >
                        <img style={{padding:"10px",width: "100%"}} src="https://shop.cheriseglobal.com/public/img/about1.jpg" />
                      </div>
                      <div style={{flex:"4"}} >
                      <img style={{padding:"10px",width: "100%"}} src="https://shop.cheriseglobal.com/public/img/about2.jpg" />
                      </div>
                      <div style={{flex:"4"}} >
                      <img style={{padding:"10px",width: "100%"}} src="	https://shop.cheriseglobal.com/public/img/about3.jpg" />
                      </div>
                    </div>
                    <div style={{display:"flex"}}>
                      <div style={{flex:"4"}} >
                      <img style={{padding:"10px",width: "100%"}} src="https://shop.cheriseglobal.com/public/img/Brewdays_Logo.jpg" />
                      </div>
                      <div style={{flex:"4"}} >
                      <img style={{padding:"10px",width: "100%"}} src="https://shop.cheriseglobal.com/public/img/about41.jpg" />
                      </div>
                      <div style={{flex:"4"}} >
                      <img style={{padding:"10px",width: "100%"}} src="https://shop.cheriseglobal.com/public/img/about51.jpg" />
                      </div>
                    </div>
                  </div>
                  <div style={{flex:"2"}}>
                    <img style={{width: "100%"}} src="https://shop.cheriseglobal.com/public/img/machine.png" alt="cherise" />
                  </div>
                </div>
              </div>
            </div>

            <div className='about1' >
                  <div className="mtb20" style={{padding:"10px"}}>
                    <div  style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                      <div className="card" style={{width: "30rem",marginRight:"60px"}}>
                        <div className="card-body">
                          <h5 className="card-title mtb20 fontPhilosopher colorGreen align">OUR ROOTS</h5>
                          <img className="card-img-top" src="https://shop.cheriseglobal.com/public/img/mk_logo.png" alt="Card image cap"/>
                          <p className="card-text" style={{lineHeight:"20px",fontSize: "14px",fontWeight: "400",marginTop:"10px"}}>Our roots are based out of MK Jokai A global leader in Orthodox tea manufacturing & distribution, M K Tea Group strives to be the epitome of quality tea products. A vision of Mr. Mukundray K. Shah, the group was founded soon after India gained Independence: a time when India was just beginning to see an industrial and commercial revolution.</p>
                          <p className="card-text" style={{lineHeight:"20px",fontSize: "14px",fontWeight: "400"}}>
                            Today it is a brand that is dedicated to creating quality tea products- products that are scientifically engineered with passion, commitment and authenticity.
                            </p>
                          <div style={{display:"flex",alignItems:"center",justifyContent:"center"}} >
                            <button className='themeButton1' style={{padding:"5px 20px"}}>
                                View Videos
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="card" style={{width: "25rem",marginLeft:"60px"}}>
                        <div className="card-body">
                          <h5 className="card-title mtb20 fontPhilosopher colorGreen align">MEET WITH CEO</h5>
                          <img className="card-img-top" src="https://shop.cheriseglobal.com/public/img/CEO_img.png" alt="Card image cap"/>
                          <h4 className='fontPhilosopher align' style={{marginTop:"15px",marginBottom:"10px"}} >
                            MR. PARIMAL K Shah
                            <br/>
                            ( CEO )
                            
                          </h4>
                          <p className="card-text" style={{lineHeight:"20px",fontSize: "14px",fontWeight: "400"}}>A global leader in Orthodox tea manufacturing & distribution, M K Tea Group strives to be the epitome of quality tea products. A vision of Mr. Mukundray K. Shah, the group was founded soon after India gained Independence: a time when India was just beginning to see an industrial and commercial revolution.</p>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>

            <div className='mtb50' style={{padding:"30px"}}>
              <div className='jumbotron jumbotron-fluid' style={{padding:"20px",marginLeft:"30px",marginRight:"30px"}}>
                <div style={{display:"flex",flexDirection:"column"}} >
                  <h2 className="fontPhilosopher colorGreen" >OUR CLIENTS</h2>

                    
                  
                </div>
              </div>
            </div>

            <PaymentFooter/>
            <Footer/>
        </div>
    )
}
