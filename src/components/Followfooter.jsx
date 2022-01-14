import { Facebook, Instagram, LinkedIn, Pinterest, Twitter, YouTube } from '@mui/icons-material'
import React from 'react'
import "./Followfooter.css"
export const Followfooter = () => {
    return (
        <div className='followfooter'>
            <div className='followcontainer'>
                <div className="leftfollow">
                    <h2 className='whiteText fontPhilosopher mb10' >Follow Us</h2>
                    <div className='leftfollowdiv'>
                        <a target="_blank" href='https://www.instagram.com/cheriseglobal/'>
                            <div className='socialBack2' style={{marginLeft: "0"}}>
                                <Instagram/>
                            </div>
                        </a>
                        <a target="_blank" href='https://www.facebook.com/cheriseglobal'>
                            <div className='socialBack2' style={{marginLeft: "0"}}>
                                <Facebook/>
                            </div>
                        </a>
                        <a target="_blank" href='https://www.linkedin.com/company/cherise-tapri/'>
                            <div className='socialBack2' style={{marginLeft: "0"}}>
                                <LinkedIn/>
                            </div>
                        </a>
                        <a target="_blank" href='https://twitter.com/cheriseglobal?s=09'>
                            <div className='socialBack2' style={{marginLeft: "0"}}>
                                <Twitter/>
                            </div>
                        </a>
                        <a target="_blank" href='https://in.pinterest.com/cheriseglobal/_created/'>
                            <div className='socialBack2' style={{marginLeft: "0"}}>
                                <Pinterest/>
                            </div>
                        </a>
                        <a target="_blank" href='https://www.youtube.com/channel/UC-3QlbOMKDlXMDXtxHCjXhw'>
                            <div className='socialBack2' style={{marginLeft: "0"}}>
                                <YouTube/>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="rightfollow">
                    <div style={{display:"flex",justifyContent:"flex-end",alignItems:"center",textAlign:"right"}} >
                        <h4 className='whiteText fontPhilosopher' style={{marginRight:"15px",marginBottom:"0px",fontSize:"16px"}} >Savour farm-fresh and delicious beverages</h4>
                        <a href="https://shop.cheriseglobal.com/">
                            <button className='themeButton1' style={{color:"white",borderColor:"white"}} >Shop Now</button>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}
