import '../styles/Footer.css'
import { logoYoutube } from 'ionicons/icons';
import { logoX } from 'ionicons/icons';
import { logoWhatsapp } from 'ionicons/icons';
import { logoInstagram } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

export default function Footer(){
    return(
        <footer className='footer'>
            <ul className="social-icons">
                <li className="icon-element">
                    <a href="https://www.youtube.com/" className="icon" target='_blank'>
                        <IonIcon icon= {logoYoutube}/> 
                    </a>
                </li>
                <li className="icon-element">
                    <a href="https://x.com/?lang=es" className="icon" target='_blank'>
                        <IonIcon icon= {logoX}/> 
                    </a>
                </li>
                <li className="icon-element">
                    <a href="https://www.whatsapp.com/?lang=es_LA" className="icon" target='_blank'>
                        <IonIcon icon= {logoWhatsapp}/> 
                    </a>
                </li>
                <li className="icon-element">
                    <a href="https://www.instagram.com/" className="icon" target='_blank'>
                        <IonIcon icon= {logoInstagram}/> 
                    </a>
                </li>
            </ul>
        </footer>
    )
}