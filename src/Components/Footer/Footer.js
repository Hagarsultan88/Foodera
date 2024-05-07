import React from "react";
import { FacebookIcon,LinkedinIcon,WhatsappIcon,EmailIcon } from "react-share";
import './Footer.css';

const Footer=()=>{
    return(
            <div className="footer">
            <div className="row">
            <div className=" col-lg-12 col-md-12 ">
                    <span>Register</span>
                    <span>Forum</span>
                    <span>Affiliate</span>
                    <span>FAQ</span>
                </div>
                </div>
                <br/>

            <div className="row">
            <div className=" col-lg-12 col-md-12">
            <div className="icons">
            <a href="https://www.facebook.com/share/Tz6i238UFsMQwXi8/?mibextid=qi2Omg" target="_blank"  rel="noreferrer">
            <FacebookIcon size={32} round={true} className="ms-lg-3 me-lg-3 " />
            </a>
            <a href="https://wa.me/+2001012964866" target="_blank"  rel="noreferrer">    
            <WhatsappIcon size={32} round={true} className="me-lg-3"/>
            </a>
            <a href="https://www.linkedin.com/in/hagar-ahmed-04a2811a9" target="_blank"  rel="noreferrer">
            <LinkedinIcon size={32} round={true} className="me-lg-3"/>
            </a>
            <a href="mailto:hagarsltn@gmail.com" target="_blank"  rel="noreferrer">
            <EmailIcon size={32} round={true} className="me-lg-3"/>
            </a>
            </div>
            </div>
            </div>
            <br/>

            <div className="row">
                <div className="col-lg-12 col-md-12">
                    <p>&copy; 2024 by Hagar Sultan. All rights reserved</p>
                </div>
            </div>

            </div>

            );

            }

export default Footer;














