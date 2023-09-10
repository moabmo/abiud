import React from 'react';
import { Instagram } from '@material-ui/icons';
import { Twitter } from '@material-ui/icons';
import { Facebook } from '@material-ui/icons'; 
import { LinkedIn } from '@material-ui/icons';
import { WhatsApp } from '@material-ui/icons';
import "../styles/Footer.css"

function Footer() {
  return <div className='footer'>
    <div className='socialMedia'>
          
            <a href='https://www.linkedin.com/in/monyoro-mong-are-59430b17a/' target='blank'>
              <LinkedIn />
            </a>

            <a href='https://twitter.com/monyoromongare' target='blank'>
              <Twitter />
            </a>

            <a href='https://www.linkedin.com/in/abiud-m-59430b17a/' target='blank'>
              <Instagram />
            </a>

            <a href='https://www.facebook.com/abiud.monyoro' target='blank'>
              <Facebook />
            </a>

            <a href="https://wa.me/+254719356271" target='blank'>
              <WhatsApp />
            </a>

    </div>
    <p><b>&copy; 2023 monyoro | All rights reserved</b></p>
  </div>
}

export default Footer
