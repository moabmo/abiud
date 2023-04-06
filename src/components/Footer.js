import React from 'react';
import { Instagram } from '@material-ui/icons';
import { Twitter } from '@material-ui/icons';
import { Facebook } from '@material-ui/icons'; 
import { LinkedIn } from '@material-ui/icons';
import "../styles/Footer.css"

function Footer() {
  return <div className='footer'>
    <div className='socialMedia'>

            <a href='https://www.linkedin.com/in/abiud-m-59430b17a/' target='blank'>
            <Instagram />
            </a>

            <a href='https://twitter.com/monyoromongare' target='blank'>
            <Twitter />
            </a>

            <a href='https://www.facebook.com/abiud.monyoro' target='blank'>
            <Facebook />
            </a>
            
            <a href='https://www.linkedin.com/in/abiud-m-59430b17a/'>
                <LinkedIn />
            </a>

    </div>
    <p>&copy; 2023 monyoro.com</p>
  </div>
}

export default Footer