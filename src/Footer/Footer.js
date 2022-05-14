import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='f-t'>
                <div className='f-t-l'>
                    <div className='logo fot'></div>
                </div>
                <div className='f-t-r'>
                    <div style={{width: "50%", paddingTop: "10px", display: "flex", flexDirection: "column", justifyContent: "space-evenly"}}>
                        <div>Support</div>
                        <div>About Us</div>
                        <div>Privacy Policy</div>
                    </div>
                    <div style={{ paddingTop: "10px", display: "flex", flexDirection: "column", justifyContent: "space-evenly"}}>
                        <div>Terms & Conditions</div>
                        <div>Return & Refund Policy</div>
                        <div>Shiping & Delhivery Policy</div>
                    </div>
                </div>
            </div>
            <div className='f-b'>Sea Basket I All Rights Reserved I 2022 Copyright</div>
        </div>
    )
}

export default Footer