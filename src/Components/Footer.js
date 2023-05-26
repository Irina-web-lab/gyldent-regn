import InstagramIcon from '../icons/Instagram_icon.svg';
import facebookIcon from '../icons/facebook_icon.svg';
import whatsappIcon from '../icons/whatsapp_icon.svg';
import paymentImage from '../image/Payment/media-payment.png'

const Footer = () => {
    return (<div className="footer">
        <div className="footer-content">
            <div className="footer-middle">
                <div className="footer-container">
                </div>
            </div>
            <div className="footer-bottom">
            <div class="footer-payments">
                                <img class="payment-image" src={paymentImage} alt="Payment" />                               
                                </div>
                                <div class="footer-par">
                                    <small>Copyright 2023  ©  Irina Gysland</small>
                                    <hr></hr>
                                    <small>Alle bilder og informasjon er hentet fra Bjørkelund-nettsidet for studie formål og er ikke et reelt tilbud.</small>  
                                </div>
                <div className="footer-info">
                    <div className="footer-root">
                         <h3 className="follow-header">Følg oss:</h3>
                    </div>
                    <div className="follow-content">
                        <ul className="follow-links">
                            <li className="follow-link">
                            <img alt="icons" className="icon" src={InstagramIcon}/>
                            </li>
                            <li className="follow-link">
                            <img alt="icons" className="icon" src={facebookIcon}/>
                            </li>
                            <li className="follow-link">
                            <img alt="icons" className="icon" src={whatsappIcon}/>
                            </li>                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default Footer;

