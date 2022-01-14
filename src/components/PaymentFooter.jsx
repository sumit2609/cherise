import React from 'react'
import "./PaymentFooter.css"
import safeicon from "../Assets/safe_icon.png"
import paymentcard from "../Assets/paymentcard.png"
import shipping from "../Assets/shipping.png"
import cod from "../Assets/cod.png"

export const PaymentFooter = () => {
    return (
        <div className="paymentFooter">
            <div style={{width:"90%",margin:"auto"}}>
                <div className='flexDiv alignCenter' style={{justifyContent:"space-between"}}>
                    <div className='flexOne'>
                        <h4 className='font24 mb0 fontPhilosopher whiteText'>PAYMENT</h4>
                        <p className='mtb20'>
                            <strong>
                                <img src={safeicon} alt="safeicon"/>
                                <span style={{color: "#ffffff"}} >100% Payment Protection</span>
                            </strong>
                        </p>
                        <img className='mw100' src={paymentcard} alt="cards"/>
                    </div>

                    <div className='flexOne mtb10' >
                    <div className='row'>
                        <div  className='col-md-4 text-center ptb20 p10'></div>
                        <div className='col-md-4 col-xs-6 text-center borderRight1 ptb20 p10' >
                            <img src={shipping} alt="shipping" className='mb10 mobSecureImg' />
                            <p className='font16 mtb10 whiteText' >Free shipping</p>
                            <p className='font12 mtb10 whiteText'>On Order above ₹99</p>
                        </div>
                        <div className='col-md-4 col-xs-6 text-center ptb20 p10' >
                            <img src={cod} alt="cod" className='mb10 mobSecureImg' style={{marginBottom:"6px"}} />
                            <p className='font16 mtb10 whiteText' >COD Available</p>
                            <p className='font12 mtb10 whiteText'>Free for order above ₹99</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
